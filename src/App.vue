<template>
  <div>
      <!-- <RoutingComponent /> -->
      <HeaderMain />
      <IntroSection />
      <!-- <InputAddress />
      <TableAddress /> -->
  </div>
</template>

<script>
    import HeaderMain from './components/HeaderMain.vue';
    import IntroSection from './components/IntroSection.vue';
//   import InputAddress from './components/InputAddress.vue';
//   import TableAddress from './components/TableAddress.vue';
  export default {
      name: 'App',
      components: {
    HeaderMain,
    IntroSection
    //   InputAddress,
    //   TableAddress
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