<template>
    <nav class="navbar navbar-expand-xl">
        <div class="container">
            <ul class="navbar-nav lg-auto">
                <li class="nav-item px-3">
                    <router-link to="/" class="no-underline" v-if='($store.state.AUTHENTICATEd === false)'>
                        <a href="#" class="nav-link">Home</a>
                    </router-link>
                </li>
            </ul>
            <LoginOffHeader v-if='($store.state.AUTHENTICATEd === false)'/>
            <LoginOnHeader v-if='($store.state.AUTHENTICATEd === true)'/>
        </div>       
    </nav>
</template>
<script>
import LoginOffHeader from './Header/LoginOffHeader.vue';
import LoginOnHeader from './Header/LoginOnHeader.vue';
export default {
    name: 'HeaderMain',
    components: {
    LoginOffHeader
    , LoginOnHeader
    },
}
</script>
<style scoped>
</style>