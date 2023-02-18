<template>
    <div class="lg-auto">
        <router-link to="/LoginPage">
            <button type="button" class="btn btn-light me-3" @click="this.$store.commit('CHANGETOREGISTER')">Register</button>
        </router-link>
        <router-link to="/LoginPage">
            <button class="btn btn-outline-success me-3" type="button" @click="this.$store.commit('CHANGETOLOGIN')">Login</button>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'LoginOffHeader',
    }
</script>