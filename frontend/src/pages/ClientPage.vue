<template>
    <div>
        <IntroClient />
        <LittleTutorial />
        <InputAddress />
    </div>
</template>

<script>
import IntroClient from '../components/ClientPage/IntroClient.vue'
import LittleTutorial from '@/components/LandingPage/LittleTutorial.vue';
import InputAddress from '../components/InputAddress.vue'
export default {
    name: 'ClientPage',
    components: {
        IntroClient
        , LittleTutorial
        , InputAddress
    }
}
</script>

<style>
</style>