<template>
    <Popper>
        <button class="nav-item btn btn-light dropdown-toggle rounded-pill d-flex justify-content-center align-items-center">
            <img 
                src="../../assets/perfil-photo/default-avatar.png" 
                alt=""
                class="perfil-photo m-1"
            >
            <div class="m-2 text-dark"> {{ $store.state.firstName }} </div>
        </button>
        <template #content>
            <ul class="list-group rounded-4 text-start p-2 px-4">
                <router-link to="/Client/Home" class="no-underline">
                    <li class="btn btn-light p-0 py-2 border border-0 w-100">Home</li>
                </router-link>
                <!-- <router-link to="/Client/ActionsRecorded" class="no-underline">
                    <li class="btn btn-light p-0 py-2 border border-0 w-100">Actions</li>
                </router-link> -->
                <router-link to="/Client/UpdateProfile" class="no-underline">
                    <li class="btn btn-light p-0 py-2 border border-0 w-100">Profile</li>
                </router-link>
                <router-link to="/Client/ActionsRecorded" class="no-underline">
                    <li class="btn btn-light p-0 py-2 border border-0 w-100">Actions</li>
                </router-link>
                <router-link to="/" class="no-underline">
                    <li class="btn btn-light p-0 py-2 border border-0 w-100" @click="this.$store.commit('CHANGEMODALYESNO')">Logout</li>
                </router-link>
            </ul>
        </template>
        <ModalYesNo 
            @function="this.$store.commit('DEAUTHENTICATE')"
            text-modal="Are you sure you want to logout?"
        />
    </Popper>
</template>
<script>
import { defineComponent } from "vue";
import Popper from "vue3-popper";
import ModalYesNo from "../ModalYesNo.vue";

export default defineComponent({
    name: "LoginOnHeader",
    components: {
        Popper
        , ModalYesNo
    },
});
</script>
<style scoped>
.perfil-photo{
    height: 30px;
}
.nav-item{
    min-width: 200px;
}
.list-group{
    min-width: 200px;
}
</style>