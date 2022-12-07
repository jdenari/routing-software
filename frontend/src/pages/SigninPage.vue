<template>
    <div class="signin-form-div container p-3">
        <div v-if='$store.state.registerOrLogin === "Login"'>
            <LoginForm  />
        </div>
        <div v-if='$store.state.registerOrLogin === "Register"'>
            <RegisterForm />
        </div>
        <MainFooter class="footer" />
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
.signin-form-div{
    margin-top: 150px;
}
.footer {
    position: fixed;
    bottom: 0px;
    left:50;
    transform: translate(0%, 0%);
}
</style>