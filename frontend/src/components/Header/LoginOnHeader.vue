<template>
    <div class="dropdown">
        <button class="nav-item btn btn-light dropdown-toggle rounded-pill d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
            <img 
                src="../../assets/perfil-photo/joao-vitor-denari-dos-santos.png" 
                alt=""
                class="perfil-photo m-1"
            >
            <div class="m-2 text-dark"> {{ $store.state.firstName }} </div>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </button>
    </div>
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