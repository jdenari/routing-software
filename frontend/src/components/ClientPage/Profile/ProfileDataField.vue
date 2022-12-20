<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label class="col-form-label row justify-content-end">{{ profileDataItem }}</label>
        </div>
        <div class="col-8">
            <input 
                type="text" 
                class="form-control" 
                @input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileDataField',
    props: {
        profileDataItem: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
    
</style>