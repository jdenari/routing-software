<template>
    <nav class="navbar navbar-expand-xl">
        <div class="container">
            <ul class="navbar-nav lg-auto">
                <li class="nav-item px-3">
                    <router-link to="/">
                        <a href="#" class="nav-link">Home</a>
                    </router-link>
                </li>
                <li class="nav-item px-3">
                    <a href="#" class="nav-link">Route</a>
                </li>
                <li class="nav-item px-3">
                    <a href="#" class="nav-link">Contact</a>
                </li>
                <li class="nav-item px-3">
                    <a href="#" class="nav-link">Documentation</a>
                </li>
            </ul>
            <div class="navbar-nav lg-auto">
                <router-link to="/LoginPage">
                    <button type="button" class="btn btn-light me-2" @click="changeToRegister">Register</button>
                </router-link>
                <router-link to="/LoginPage">
                    <button class="btn btn-outline-success me-2" type="button" @click="changeToLogin">Login</button>
                </router-link>
            </div>
        </div>       
    </nav>
</template>
  
    <script>
        export default {
        name: 'HeaderMain',
        methods: {
            changeToLogin() {
                this.$store.commit('changeToLogin')
            },
            changeToRegister() {
                this.$store.commit('changeToRegister')
            },
        }
    }
</script>