<template>
    <div class="form-login p-3 m-auto">
        <form class="login-form p-3 border m-auto">
            <div>
                <h4 class="text-center p-2">Iniciar Sessão</h4>
                <div class="my-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    name="login"
                >
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="exampleInputPassword1"
                        name="password"
                    >
                </div>
                    <a href="#" class="nav-link" @click="changeToRegister">Not yet registered?</a>
                <ButtonSubmit />
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
    methods: {
        changeToRegister() {
                this.$store.commit('changeToRegister')
            },
    }
}
</script>

<style scoped>
.form-login{
    width: 550px;
}
</style>