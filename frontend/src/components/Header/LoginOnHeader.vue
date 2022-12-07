<template>
    <li class="nav-item btn btn-light rounded-pill d-flex align-items-center">
        <img 
            src="../../assets/perfil-photo/joao-vitor-denari-dos-santos.png" 
            alt=""
            class="perfil-photo m-1"
        >
        <div class="m-2 text-dark"> {{ $store.state.firstName }} </div>
    </li>
</template>
<script>
    export default {
        name: 'LoginOnHeader',
    }
</script>
<style scoped>
.perfil-photo{
    height: 30px;
}
</style>