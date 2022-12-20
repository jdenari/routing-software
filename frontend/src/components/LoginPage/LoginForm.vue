<template>
    <div class="form-login p-3 m-auto">
        <form class="login-form p-3 border m-auto">
            <div>
                <h4 class="text-center p-2">Login in</h4>
                <div class="my-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    name="login"
                    v-model="auth.email"
                >
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="exampleInputPassword1"
                        name="password"
                        v-model="auth.password"
                    >
                </div>
                    <a href="#" class="nav-link" @click="changeToRegister">Not yet registered?</a>
                <ButtonSubmit 
                    textButton="Go" 
                    @click="loginVerification"
                />
                <div class="p"> {{ this.returnMessage }}</div>
            </div>
        </form>
    </div>
</template>

<script>
import ButtonSubmit from '../ButtonSubmit.vue'
export default {
    name: 'LoginForm',
    components: {
        ButtonSubmit
    },
    data (){
        return {
            returnMessage: null,
            auth: {
               email: '',
               password: ''
            }
        }
    },
    methods: {
        changeToRegister() {
                this.$store.commit('changeToRegister')
        },
        async loginVerification(e) {
            // it does not let the page reaload
            e.preventDefault();
            // it creates the object that will be use on API
            const dataObject = {
                email: this.auth.email,
                password: this.auth.password
            }
            const jsonDataObject = JSON.stringify(dataObject)
            await fetch("https://routehelper.online/api/auth/login", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            // it access the api to update the profile data using token and the object
            .then((data) => {
                if(data.error){
                    // it prints the error
                    this.returnMessage = data.error;
                } else {
                    // it takes to the dashboard page and commit all the page with the user info
                    this.$router.push({ path: '/Client/Home' })
                    this.$store.commit("authenticate", {
                        token: data.token, 
                        userId: data.userId, 
                        firstName: data.firstName, 
                        lastName: data.lastName,
                        email: data.email,
                    })
                }
            })
        },
    }
}
</script>

<style scoped>
.form-login{
    width: 550px;
}
</style>