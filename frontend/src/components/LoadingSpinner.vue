<template>
    <div class="d-flex justify-content-center m-auto" v-if="this.$store.state.loadingSpinner">
        <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
</template>
<script>
    export default {
        name: 'LoadingSpinner',
    }
</script>