<template>
    <div class="container"> 
        <ProfileForm />
        <MainFooter />
    </div>
</template>

<script>
import ProfileForm from '../../components/ClientPage/Profile/ProfileForm.vue'
import MainFooter from '@/components/MainFooter.vue';
export default {
    name: 'UpdateProfile',
    components: {
        ProfileForm
        , MainFooter
    }
}
</script>

<style>

</style>