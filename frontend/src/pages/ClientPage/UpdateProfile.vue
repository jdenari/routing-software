<template>
    <div class="container"> 
        <ProfileDataForm />
        <MainFooter class="footer"/>
    </div>
</template>

<script>
import ProfileDataForm from '../../components/ClientPage/Profile/ProfileDataForm.vue'
import MainFooter from '@/components/MainFooter.vue';
export default {
    name: 'UpdateProfile',
    components: {
        ProfileDataForm
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