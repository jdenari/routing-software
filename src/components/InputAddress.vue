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
                            v-model="address.origin">
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
                            v-model="address.destiny">
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
                    :title="addressfield.title"
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
                    <div class="col-2 p-1">
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input 
                                type="text" 
                                class="form-control" 
                                aria-label="Amount (to the nearest reais) " 
                                placeholder="Fuel Price">
                        </div>
                    </div>
                    <div class="col-3 p-1">
                        <button 
                            type="button" 
                            class="btn btn-success col-12" 
                            @click="calculateDistance">Calculate</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
        import AddressField from './AddressField.vue';
        import axios from 'axios'
        export default {
        name: 'InputAddress',
        components: { AddressField },
        data() {
            return {
                newAddressField: '', 
                AddressFieldObject: [
                ],
                nextAddressFieldID: 1,
                address: {
                    origin: 'Rua Edgard Werneck, 1016, Cidade de Deus, Rio de Janeiro - Rio de Janeiro, 22763, Brazil',
                    destiny: 'R. Bárbara Knippelberg Loureiro, 203 - Vila Ema, São José dos Campos - SP, 12243-040'
                },
                bindKey: '',
                distanceCalculated: ''
            }
        },   
        methods: {
            calculateDistance(){
                axios
                .get('http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' + this.address.origin + '&wp.1=' + this.address.destiny + '/&key=' + this.bindKey)
                .then(response => {
                    this.$store.state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
                })                    
            },
            addAddressField() {
                this.AddressFieldObject.push({
                    id: this.nextAddressFieldID++,
                })
                this.newAddressField = ''
            },
            removeAddressField() {
                this.AddressFieldObject.pop({
                    id: this.nextAddressFieldID--,
                })
                this.newAddressField = ''
            }
        }
    }
</script>