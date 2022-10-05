<template>
    <div class="bg-light">
        <div class="container p-3">
            <!-- First origin address field -->
            <div class="input-group w-75 m-auto">
                <div class="col-9">
                    <div class="p-1">
                        <input 
                            type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button" 
                            placeholder="Fill the address"
                            v-model="originAddress">
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
                            v-model="destinyAddress">
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
                <div class="w-100 d-flex justify-content-between">
                    <div class="col-6 p-1 d-flex">
                        <div class="col-6 p-1">
                            <div class="input-group mb-3">
                                <span class="input-group-text">km/l</span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    aria-label="Amount (to the nearest reais) " 
                                    placeholder="Fuel Consumption">
                            </div>
                        </div>
                        <div class="col-6 p-1">
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    aria-label="Amount (to the nearest reais) " 
                                    placeholder="Fuel Price">
                            </div>
                        </div>
                    </div>
                    <div class="col-3 p-1">
                        <button 
                            type="button" 
                            class="btn btn-success col-12" 
                            @click="createallAddressObject();calculateDistance()">Calculate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
        import AddressField from './AddressField.vue';
        import { ref } from 'vue'
        // import axios from 'axios'
        export default {
        name: 'InputAddress',
        components: { AddressField },
        data() {
            return {
                // single
                newAddressField: ref(''), 
                arr: ref({}),
                distanceCalculated: '',
                nextAddressFieldID: ref(1),
                nextAddressFieldTitle: ref([]),
                bindKey: '',
                originAddress: '',
                destinyAddress: '',

                // arrays

                // objects
                AddressFieldObject: [],
                allAddressObject: []             
            }
        },   
        methods: {
            createallAddressObject(){
                this.allAddressObject = Object.assign({origin: this.originAddress}, {destiny: this.destinyAddress}, this.arr)
                
            },

            calculateDistance(){
                
                this.$store.dispatch('mainCalculateDistance', this.allAddressObject)
                this.allAddressObject = []
            },

            addAddressField() {
                const id = 'deliveryPoint' + this.nextAddressFieldID++
                    this.AddressFieldObject.push({
                        id,
                        title: this.newAddressField
                        })
                this.arr[id] = ''
                this.newAddressField = ''
            },
            removeAddressField() {
                this.nextAddressFieldID = this.nextAddressFieldID - 1
                const id = 'deliveryPoint' + this.nextAddressFieldID
                console.log(id)
                    this.AddressFieldObject.pop({
                        id,
                        title: this.newAddressField
                        })
                delete this.arr[id]
                this.newAddressField = ''
            },
        },
    }
</script>