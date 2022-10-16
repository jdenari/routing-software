<template>
    <div class="bg-light">
        <div class="container p-3 py-5">
            <div class="h1 text-center p-3">Your distance calculator</div>
            <div class="h6 w-75 m-auto p-2">Input all address</div>
            <!-- First origin address field -->
            <div class="input-group w-75 m-auto">
                
                <div class="col-9">
                    <div class="p-1">
                        <input 
                            type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button" 
                            placeholder="Fill the address"
                            v-model="deliveryPoint0">
                    </div>
                </div>
                <div class="col-2">
                    <div class="p-1">
                        <select class="form-select" id="inputGroupSelect02">
                            <option selected>Origin</option>
                            <option value="1">Delivery Point</option>
                            <option value="2">Last Point</option>
                        </select>
                    </div>
                </div>
                <div class="col-1 p-1 px-2">
                    <button type="button" class="btn btn-outline-success w-100" @click="addAddressField">+</button>
                </div>
            </div>
            <!-- Second address field -->
            <div class="input-group w-75 m-auto">
                <div class="col-9">
                    <div class="p-1">
                        <input 
                            type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button" 
                            placeholder="Fill the address"
                            v-model="deliveryPoint1">
                    </div>
                </div>
                <div class="col-2">
                    <div class="p-1">
                        <select class="form-select" id="inputGroupSelect02">
                            <option value="1">Origin</option>
                            <option selected>Delivery Point</option>
                            <option value="2">Last Point</option>
                        </select>
                    </div>
                </div>
                <div class="col-1 p-1 px-2">
                    <button type="button" class="btn btn-outline-danger w-100" @click="removeAddressField">-</button>
                </div>
            </div>
            <!-- Logic to add a new address field -->
            <ul class="p-0 m-0">
                <address-field
                    v-for="(addressfield) in AddressFieldObject"
                    :key="addressfield.id"
                    :title="'otherField' + addressfield.title"
                    v-model="arr[addressfield.id]"
                ></address-field>
            </ul>
            <div class="h6 w-75 m-auto p-2">Bind Maps Key</div>
            <div class="input-group w-75 m-auto">
                <div class="col-9">
                    <div class="p-1">
                        <input 
                            type="text" 
                            class="form-control" 
                            aria-label="Amount (to the nearest reais) " 
                            placeholder="Bind Key"
                            v-model="bindKey">
                    </div>
                </div>
            </div>

            <!-- Other fields inputs (fuel price and the button calculate) -->
            <div class="input-group w-75 m-auto">
                <div class="w-100 d-flex">
                    <div class="col-6 d-flex p-1">
                        <div class="col-6 d-flex">Fuel Consumption</div>
                        <div class="col-6 d-flex">Fuel Price</div>
                    </div>
                    
                </div>
                <div class="w-100 d-flex justify-content-between">
                    <div class="col-6 d-flex">
                        <div class="col-6 p-1">
                            <div class="input-group mb-3">
                                <span class="input-group-text">km/l</span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    aria-label="Amount (to the nearest reais) " 
                                    placeholder="Fuel Consumption"
                                    v-model="fuelConsumption">
                            </div>
                        </div>
                        <div class="col-6 p-1">
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    aria-label="Amount (to the nearest reais) " 
                                    placeholder="Fuel Price"
                                    v-model="fuelPrice">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-1 d-flex justify-content-md-end">
                        <button 
                            type="button" 
                            class="btn btn-secondary col-1 m-1" 
                            @click="cleanInput()">Clean
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-success col-3 me-md-2 m-1" 
                            @click="createallAddressObject()">Calculate
                        </button>
                    </div>
                <div class="alert alert-warning m-auto d-flex align-items-center" role="alert" v-if="this.awesome">     
                    You must be logged to have access to more ckeckpoints!
                </div>
            </div>
        </div>
    </div>
</template>
<script>
        import AddressField from './AddressField.vue';
        import { ref } from 'vue'
        export default {
        name: 'InputAddress',
        components: { AddressField },
        data() {
            return {
                // single
                newAddressField: ref(''), 
                arr: ref({}),
                nextAddressFieldID: ref(2),
                nextAddressFieldTitle: ref([]),
                bindKey: '',
                deliveryPoint0: '',
                deliveryPoint1: '',
                fuelPrice: '',
                fuelConsumption: '',
                awesome: false,

                // arrays

                // objects
                AddressFieldObject: [],
                allAddressObject: [],           
            }
        },   
        methods: {

            // create a object to send the address input
            createallAddressObject(){

                this.allAddressObject = {
                    address: 
                        Object.assign({deliveryPoint0: this.deliveryPoint0}, {deliveryPoint1: this.deliveryPoint1}, this.arr),
                    otherParameters: 
                        Object.assign({fuelConsumption: this.fuelConsumption}, {fuelPrice: this.fuelPrice})
                }

                console.log(this.allAddressObject)
                this.$store.dispatch('travellingSalesmanProblem', this.allAddressObject)
                this.allAddressObject = []
            },

            // create a new field address inside the html
            addAddressField() {
                if (this.nextAddressFieldID < 8) {
                    const id = 'deliveryPoint' + this.nextAddressFieldID++
                        this.AddressFieldObject.push({
                            id,
                            title: this.newAddressField
                            })
                    this.arr[id] = ''
                    this.newAddressField = ''
                } else {
                    this.awesome = !this.awesome
                    setTimeout(() => {
                        this.awesome = false;
                    }, "4000")
                }
            },

            // remove a field address inside the html
            removeAddressField() {
                this.nextAddressFieldID = this.nextAddressFieldID - 1
                const id = 'deliveryPoint' + this.nextAddressFieldID
                    this.AddressFieldObject.pop({
                        id,
                        title: this.newAddressField
                        })
                delete this.arr[id]
                this.newAddressField = ''
            },

            // clean all the info inside the inputs
            cleanInput(){
                this.deliveryPoint0 = ''
                this.deliveryPoint1 = ''

                for (let e = 2; e < this.nextAddressFieldID; e++){
                    this.arr['deliveryPoint' + e] = ''
                }

                this.fuelPrice = '',
                this.fuelConsumption = ''
            }
        },
    }
</script>