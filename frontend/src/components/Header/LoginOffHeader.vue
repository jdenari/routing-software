<template>
    <div class="navbar-nav lg-auto">
        <router-link to="/LoginPage">
            <button type="button" class="btn btn-light me-2" @click="this.$store.commit('CHANGETOREGISTER')">Register</button>
        </router-link>
        <router-link to="/LoginPage">
            <button class="btn btn-outline-success me-2" type="button" @click="this.$store.commit('CHANGETOLOGIN')">Login</button>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'LoginOffHeader',
    }
</script>