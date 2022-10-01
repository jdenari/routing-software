<template>
  <div>
      <RoutingComponent />
      <HeaderMain />
      <InputAddress />
      <TableAddress />
  </div>
</template>

<script>
  import HeaderMain from './components/HeaderMain.vue';
  import InputAddress from './components/InputAddress.vue';
  import TableAddress from './components/TableAddress.vue';
  export default {
      name: 'App',
      components: {
          HeaderMain,
          InputAddress,
          TableAddress
      }
  }
</script>