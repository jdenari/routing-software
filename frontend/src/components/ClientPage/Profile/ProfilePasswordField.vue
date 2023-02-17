<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label for="inputPassword6" class="col-form-label row justify-content-end">{{ passwordItem }}</label>
        </div>
        <div class="col-8">
            <input 
                class="form-control" 
                aria-describedby="passwordHelpInline"
                type="password"
                @input="$emit('update:modelValue', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePasswordField',
    props: {
        passwordItem: {
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