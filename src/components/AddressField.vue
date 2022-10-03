<template>
    <div class="input-group w-75 m-auto">
        <div class="col-9">
            <div class="p-1">
                <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Fill the address">
            </div>
        </div>
        <div class="col-2">
            <div class="p-1">
                <select class="form-select" id="inputGroupSelect02">
                    <option value="2">Origin</option>
                    <option selected>Delivery Point</option>
                    <option value="1">Last Point</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AddressField'
}
</script>