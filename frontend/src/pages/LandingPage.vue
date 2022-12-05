<template>
    <div>
        <IntroSection />
        <LittleTutorial />
        <InputAddress />
        <SearchAddress />
        <TableAddress />
        <BenefitsLogin />
        <MainFooter />
    </div>
</template>

<script>
import IntroSection from '../components/LandingPage/IntroSection.vue';
import LittleTutorial from '../components/LandingPage/LittleTutorial.vue';
import InputAddress from '../components/InputAddress.vue';
import TableAddress from '../components/TableAddress.vue';
import BenefitsLogin from '@/components/LandingPage/BenefitsLogin.vue';
import SearchAddress from '../components/SearchAddress.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
    name: 'LandingPage',
    components: {
        IntroSection,
        LittleTutorial,
        InputAddress,
        TableAddress,
        BenefitsLogin,
        SearchAddress,
        MainFooter
}
}
</script>
