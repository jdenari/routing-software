<template>
    <div class="bg-light">
        <div class="container-fluid container-xl p-3">
            <div class="p-1 input-address-width w-75 m-auto">
                <div class=" m-auto d-flex">
                    <div class="h6 p-2 col-6 m-0">CEP</div>
                    <div class="h6 p-2 col-3 m-0">Number</div>
                </div>
                <div class="input-group m-auto">
                    <div class="col-6 p-1">
                        <input 
                                type="text" 
                                class="form-control" 
                                aria-label="Amount (to the nearest reais) " 
                                placeholder="CEP"
                                v-model="cepAddress"
                                >
                       
                    </div>
                    <div class="col-3 p-1">
                        <input 
                            type="number" 
                            class="form-control" 
                            aria-label="Amount (to the nearest reais) " 
                            placeholder="CEP"
                            v-model.number="numberAddress"
                            >
                    </div>
                    <div class="col-3 p-1">
                        <button 
                                type="button" 
                                class="btn btn-secondary w-100" 
                                @click="searchAddress()">Search
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-2 px-sm-3">
                <div 
                    class="input-address-width w-75 m-auto text-center border border-secondary border-opacity-75 rounded p-3"
                    style="background-color: white"
                >{{ $store.state.cepFullAddress }}</div>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SearchAddress',
        data() {
            return{
                cepAddress: '01310000',
                numberAddress: '1000'
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