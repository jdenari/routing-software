<template>
    <div>
        <!-- <RoutingComponent /> -->
        <HeaderMain />
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
export default {
        name: 'App',
        components: {
            HeaderMain,
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