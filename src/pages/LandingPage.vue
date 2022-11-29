<template>
    <IntroSection />
    <LittleTutorial />
    <InputAddress />
    <SearchAddress />
    <TableAddress />
    <benefitsLogin />
</template>

<script>
import IntroSection from '../components/IntroSection.vue';
import LittleTutorial from '../components/LittleTutorial.vue';
import InputAddress from '../components/InputAddress.vue';
import TableAddress from '../components/TableAddress.vue';
import benefitsLogin from '../components/benefitsLogin.vue'
import SearchAddress from '../components/SearchAddress.vue';
export default {
    name: 'LandingPage',
    components: {
        IntroSection,
        LittleTutorial,
        InputAddress,
        TableAddress,
        benefitsLogin,
        SearchAddress
}
}
</script>