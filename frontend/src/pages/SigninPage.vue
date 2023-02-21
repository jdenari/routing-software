<template>
    <div class="signin-form container p-3">
        <div v-if='$store.state.registerOrLogin === "Login"' class="login my-5">
            <LoginForm  />
        </div>
        <div v-if='$store.state.registerOrLogin === "Register"' class="register my-4">
            <RegisterForm />
        </div>
        <MainFooter class="footer mt-5" />
    </div>
</template>

<script>
import LoginForm from '../components/LoginPage/LoginForm.vue'
import RegisterForm from '../components/LoginPage/RegisterForm.vue'
import MainFooter from '@/components/MainFooter.vue';
export default {
    name: 'SigninPage',
    components: { LoginForm, RegisterForm, MainFooter }
}
</script>

<style>
.signin-form{
    margin-top: 150px !important;
}
.footer{
    margin-top: 180px !important
}

</style>