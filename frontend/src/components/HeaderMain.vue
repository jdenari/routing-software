<template>
    <nav class="navbar navbar-expand-xl">
        <div class="container">
            <ul class="navbar-nav lg-auto">
                <li class="nav-item px-3">
                    <router-link to="/">
                        <a href="#" class="nav-link">Home</a>
                    </router-link>
                </li>
                <li class="nav-item px-3">
                    <a href="#" class="nav-link">Route</a>
                </li>
                <li class="nav-item px-3">
                    <a href="#" class="nav-link">Contact</a>
                </li>
                <li class="nav-item px-3">
                    <a href="#" class="nav-link">Documentation</a>
                </li>
            </ul>
            <LoginOffHeader v-if='($store.state.authenticated === false)'/>
            <LoginOnHeader v-if='($store.state.authenticated === true)'/>
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