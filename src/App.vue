<template>
  <div>
      <!-- <RoutingComponent /> -->
      <HeaderMain />
      <IntroSection />
      <LittleTutorial />
      <InputAddress />
      <TableAddress />
      <benefitsLogin />
      <MainFooter />
  </div>
</template>

<script>
    import HeaderMain from './components/HeaderMain.vue';
    import IntroSection from './components/IntroSection.vue';
    import LittleTutorial from './components/LittleTutorial.vue';
    import InputAddress from './components/InputAddress.vue';
    import TableAddress from './components/TableAddress.vue';
    import benefitsLogin from './components/benefitsLogin.vue'
    import MainFooter from './components/MainFooter.vue'
  export default {
      name: 'App',
      components: {
    HeaderMain,
    IntroSection,
    LittleTutorial,
    InputAddress,
    TableAddress,
    benefitsLogin,
    MainFooter
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