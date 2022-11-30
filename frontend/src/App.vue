<template>
    <div>
        <!-- <RoutingComponent /> -->
        <HeaderMain />
        <router-view></router-view>
        <MainFooter class="footer" />
    </div>
</template>

<script>
    import HeaderMain from './components/HeaderMain.vue';
    import MainFooter from './components/MainFooter.vue'

export default {
        name: 'App',
        components: {
            HeaderMain,
            MainFooter,
        }
    }
</script>

<style>
    @font-face {
        font-family: "euclid";
        src: local("euclid"),
        url(./fonts/euclid-circular-a-cufonfonts/Euclid-Circular-A-Regular.ttf) format("truetype");
    }

    body{
        font-family: "euclid";
    }
    
</style>