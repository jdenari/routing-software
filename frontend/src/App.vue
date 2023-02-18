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
.no-underline{
    text-decoration: none !important;
    color: inherit !important;
}
</style>

<style>
/*------------------------------------1600px----------------------------------------------*/ 
@media screen and (max-width: 1600px) {

}
/*-----------------------------------1400px-xxl------------------------------------------*/ 
@media screen and (max-width: 1400px) {
    html{
        font-size: 90.0%;
    }
}
/*-----------------------------------1200px-xl-------------------------------------------*/ 
@media screen and (max-width: 1200px) {
}
/*------------------------------------992px-lg-------------------------------------------*/ 
@media screen and (max-width: 992px) {
    html{
        font-size: 85.0%;
    }
}
/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 768px) {

}
/*------------------------------------576px-sm-------------------------------------------*/
@media screen and (max-width: 576px) {
    html{
        font-size: 75.0%;
    }
}</style>