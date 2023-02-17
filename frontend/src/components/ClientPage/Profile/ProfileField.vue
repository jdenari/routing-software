<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label class="col-form-label row justify-content-end">{{ profileItem }}</label>
        </div>
        <div class="col-8">
            <input 
                type="text" 
                class="form-control" 
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileField',
    props: {
        profileItem: {
            type: String,
            required: true
        },
        modelValue: {
            required: true
        },
    }
}
</script>

<style scoped>
    
</style>