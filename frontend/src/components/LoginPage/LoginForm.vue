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
                    <a href="#" class="nav-link" @click="CHANGETOREGISTER">Not yet registered?</a>
                <ButtonSubmit 
                    textButton="Go" 
                    @click="loginVerification"
                    class="mt-2"
                />
                <MessageText
                    :messageText="$store.state.messageText" 
                />
            </div>
        </form>
    </div>
</template>

<script>
import ButtonSubmit from '../ButtonSubmit.vue'
import MessageText from '../MessageText.vue'
export default {
    name: 'LoginForm',
    components: {
        ButtonSubmit
        , MessageText
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
        CHANGETOREGISTER() {
                this.$store.commit('CHANGETOREGISTER')
        },
        async loginVerification(e) {
            // it does not let the page reaload
            e.preventDefault();
            // it creates the object that will be use on API
            const dataObject = {
                email: this.auth.email,
                password: this.auth.password
            }
            this.$store.dispatch('loginVerification', dataObject)
        },
    }
}
</script>

<style scoped>
.form-login{
    width: 550px;
}
</style>

<style scoped>
/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 768px) {
    .form-login{
        width: 450px
    }
}
/*------------------------------------576px-sm-------------------------------------------*/
@media screen and (max-width: 576px) {
    .form-login{
        width: 350px
    }
}
</style>