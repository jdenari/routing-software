<template>
    <Popper>
        <button class="nav-item btn btn-light dropdown-toggle rounded-pill d-flex justify-content-center align-items-center">
            <img 
                src="../../assets/perfil-photo/joao-vitor-denari-dos-santos.png" 
                alt=""
                class="perfil-photo m-1"
            >
            <div class="m-2 text-dark"> {{ $store.state.firstName }} </div>
        </button>
      <template #content>
        <ul class="list-group rounded-4 text-start p-2 px-4">
            <router-link to="/Client" class="no-underline">
                <li class="btn btn-light p-0 py-2 border border-0 w-100">Home</li>
            </router-link>
            <router-link to="/Client/ActionsRecorded" class="no-underline">
                <li class="btn btn-light p-0 py-2 border border-0 w-100">Actions</li>
            </router-link>
            <router-link to="/Client/UpdateProfile" class="no-underline">
                <li class="btn btn-light p-0 py-2 border border-0 w-100">Profile</li>
            </router-link>
            <li class="btn btn-light p-0 py-2 border border-0">Logout</li>
        </ul>
      </template>
    </Popper>
</template>
<script>
import { defineComponent } from "vue";
import Popper from "vue3-popper";

export default defineComponent({
    name: "LoginOnHeader",
    components: {
    Popper,
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