<template>
    <div class="container d-flex p-3">
        <div class="col-6 p-5 m-auto">
            <div class="h1 m-2">Welcome,  {{ this.$store.state.firstName }}!</div>
            <div class="h3 m-2 mb-4">Glad to have you here.</div>
            <div class="lead m-2">Thanks for signing up! Here you can enjoy all the benefits that this site can offer.</div>
            <div class="lead m-2">Enjoy it!</div>
        </div>
        <div class="col-6 p-3">
            <img src="../../assets/main-image-login-on.png" alt="" class="img-responsive w-100">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'IntroClient',
    }
</script>