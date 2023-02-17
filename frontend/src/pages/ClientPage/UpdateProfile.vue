<template>
    <div class="container"> 
        <ProfileForm />
        <MainFooter class="footer"/>
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
.footer {
    position: fixed;
    bottom: 0px;
    left:50;
    transform: translate(0%, 0%);
}
</style>