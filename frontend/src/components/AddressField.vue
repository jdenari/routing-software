<template>
    <div class="input-group input-address-width w-75 m-auto">
        <div class="col-sm-9 col-8">
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
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Delivery Point" disabled>
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