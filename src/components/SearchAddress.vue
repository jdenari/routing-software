<template>
    <div class="bg-light">
        <div class="container p-3">
            <div class="w-75 m-auto d-flex">
                <div class="h6 p-2 col-6">CEP</div>
                <div class="h6 p-2 col-3">Number</div>
            </div>
            <div class="input-group w-75 m-auto">
                <div class="col-6">
                    <div class="p-1">
                        <input 
                            type="text" 
                            class="form-control" 
                            aria-label="Amount (to the nearest reais) " 
                            placeholder="CEP"
                            v-model="cepAddress"
                            >
                    </div>
                </div>
                <div class="col-3">
                    <div class="p-1">
                        <input 
                            type="number" 
                            class="form-control" 
                            aria-label="Amount (to the nearest reais) " 
                            placeholder="CEP"
                            v-model.number="numberAddress"
                            >
                    </div>
                </div>
                <div class="col-3">
                    <button 
                            type="button" 
                            class="btn btn-secondary m-1 w-100" 
                            @click="searchAddress()">Search
                    </button>
                </div>
            </div>
            <div class="w-75 m-auto text-center p-3">{{ $store.state.cepFullAddress }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SearchAddress',
        data() {
            return{
                cepAddress: '12243040',
                numberAddress: '53'
            }
        },
        methods: {
            searchAddress(){

                let cepObject = {
                    cepAddress: this.cepAddress,
                    cepNumber: this.numberAddress
                }

                this.$store.dispatch('cepSearchAPI', cepObject)
            }
        }
    }
</script>