<template>
    <div>
        <IntroClient />
        <LittleTutorial />
        <InputAddress />
        <TableAddress />
        <MainFooter />
    </div>
</template>

<script>
import IntroClient from '../../components/ClientPage/IntroClient.vue'
import LittleTutorial from '@/components/LandingPage/LittleTutorial.vue';
import InputAddress from '../../components/InputAddress.vue'
import TableAddress from '@/components/TableAddress.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
    name: 'ClientPage',
    components: {
        IntroClient
        , LittleTutorial
        , InputAddress
        , TableAddress
        , MainFooter
    }
}
</script>

<style>
</style>