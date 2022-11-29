<template>
    <div class="container p-3">
        <div v-if='$store.state.registerOrLogin == "Login"'>
            <LoginForm  />
        </div>
        <div v-if='$store.state.registerOrLogin == "Register"'>
            <RegisterForm />
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginPage/LoginForm.vue'
import RegisterForm from '../components/LoginPage/RegisterForm.vue'
export default {
    name: 'SigninPage',
    components: { LoginForm, RegisterForm }
}
</script>

<style>

</style>