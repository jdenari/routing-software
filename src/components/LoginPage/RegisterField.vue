<template>
    <div class="row p-1 g-3 d-md-flex justify-content-md-end">
        <div class="col-4 d-flex flex-row-reverse">
            <label for="inputPassword6" class="col-form-label">{{ RegisterFieldItem }}</label>
        </div>
        <div class="col-8">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterField',
    props: {
        RegisterFieldItem: {
            type: String,
            required: true 
        }
    }
}
</script>

<style scoped>
</style>