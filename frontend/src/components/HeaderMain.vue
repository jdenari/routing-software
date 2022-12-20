<template>
    <nav class="navbar navbar-expand-xl">
        <div class="container">
            <ul class="navbar-nav lg-auto">
                <li class="nav-item px-3">
                    <router-link to="/" class="no-underline" v-if='($store.state.authenticated === false)'>
                        <a href="#" class="nav-link">Home</a>
                    </router-link>
                </li>
            </ul>
            <ModalYesNo />
            <LoginOffHeader v-if='($store.state.authenticated === false)'/>
            <LoginOnHeader v-if='($store.state.authenticated === true)'/>
        </div>       
    </nav>
</template>
<script>
import LoginOffHeader from './Header/LoginOffHeader.vue';
import LoginOnHeader from './Header/LoginOnHeader.vue';
import ModalYesNo from './ModalYesNo.vue';
export default {
    name: 'HeaderMain',
    components: {
    LoginOffHeader
    , LoginOnHeader
    , ModalYesNo
    },
}
</script>
<style scoped>
</style>