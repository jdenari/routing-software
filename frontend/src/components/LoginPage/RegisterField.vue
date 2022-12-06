<template>
    <div class="row p-1 g-3 d-md-flex justify-content-md-end">
        <div class="col-4 d-flex flex-row-reverse">
            <label for="inputPassword6" class="col-form-label">
                {{ registerDataItem }}
            </label>
        </div>
        <div class="col-8">
            <input
                class="form-control"
                :type="textAttributeValue"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
        </div>
  </template>
  
<script>
    export default {
        name: 'RegisterField',
        props: {
            registerDataItem: {
                type: String,
                required: true,
            },
            textAttributeValue: {
                type: String,
                required: true
            },
            modelValue: {
                required: true,
            },
        },
    };
</script>

<style scoped>
</style>