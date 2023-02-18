<template>
    <div class="input-group input-address-width w-75 m-auto">
        <div class="col-9">
            <div class="p-1">
                <input 
                    type="text" 
                    class="form-control" 
                    aria-label="Text input with dropdown button" 
                    placeholder="Fill the address"
                    :value="modelValue"
                    @input="updateValue"
                    >
            </div>
        </div>
        <div class="col-2">
            <div class="p-1">
                <select class="form-select" aria-label="Disabled select example" disabled>
                    <option value="2">Origin</option>
                    <option selected>Delivery Point</option>z
                    <option value="1">Last Point</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AddressField',
        props: {
            modelValue: String
        },
        methods: {
            updateValue(event){
                this.$emit('update:modelValue', event.target.value)
            }
        } 
    }
</script>