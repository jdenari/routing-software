<template>
    <div class="bg-light">
        <div class="container p-3 py-5">
            <div class="h1 text-center p-3">Your distance calculator</div>
            <SelectedFunction class="text-center"/>
            <!-- message alert when there is a error-->
            <MessageText 
                :messageText="this.$store.state.messageText"
            />
            <div class="h6 w-75 m-auto p-2">Input all addresses</div>
            <!-- First origin address field -->
            <div class="input-group w-75 m-auto">
                
                <div class="col-9">
                    <div class="p-1">
                        <input 
                            type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button" 
                            placeholder="Fill the address"
                            v-model="deliveryPoint0"
                            required>
                    </div>
                </div>
                <div class="col-2">
                    <div class="p-1">
                        <select class="form-select"  aria-label="Disabled select example" disabled>
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
                        <select class="form-select"  aria-label="Disabled select example" disabled>
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
                                    type="number" 
                                    class="form-control" 
                                    aria-label="Amount (to the nearest reais) " 
                                    placeholder="Fuel Consumption"
                                    v-model.number="fuelConsumption">
                            </div>
                        </div>
                        <div class="col-6 p-1">
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    aria-label="Amount (to the nearest reais) " 
                                    placeholder="Fuel Price"
                                    v-model.number="fuelPrice">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Main buttons -->
                <div class="col-12 p-1 d-flex justify-content-md-end">
                    <button 
                        type="submit" 
                        class="btn btn-secondary col-1 m-1" 
                        @click="cleanInput()">Clean
                    </button>
                    <button 
                        type="button" 
                        class="btn btn-success col-3 m-1" 
                        @click="checkBlankForm();createallAddressObject()">Calculate
                    </button>
                </div>
                <LoadingSpinner />
            </div>
        </div>
    </div>
</template>
<script>
import AddressField from './AddressField.vue';
import MessageText from './MessageText.vue';
import SelectedFunction from './SelectedFunction.vue';
import LoadingSpinner from './LoadingSpinner.vue'
import { ref } from 'vue'
export default {
    name: 'InputAddress',
    components: { 
        AddressField 
        , MessageText
        , SelectedFunction
        , LoadingSpinner
    },
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

            // arrays

            // objects
            AddressFieldObject: [],
            allAddressObject: [],   
            errors: [],        
        }
    },   
    methods: {

        // it checks if all input address are filled! 
        checkBlankForm: function (e){

            this.$store.commit('ACTIVATELOADINGSPINNER')

            if (this.nextAddressFieldID === 2) {
                if (this.deliveryPoint0 && this.deliveryPoint1) {return true;}
            }

            if (this.nextAddressFieldID === 3) {
                if (this.deliveryPoint0 && this.deliveryPoint1 && this.arr['deliveryPoint2']) {return true;}
            }

            if (this.nextAddressFieldID === 4) {
                if (this.deliveryPoint0 && this.deliveryPoint1 && this.arr['deliveryPoint2'] && this.arr['deliveryPoint3']) {return true;}
            }

            if (this.nextAddressFieldID === 5) {
                if (this.deliveryPoint0 && this.deliveryPoint1 && this.arr['deliveryPoint2'] && this.arr['deliveryPoint3'] && this.arr['deliveryPoint4']) {return true;}
            }

            if (this.nextAddressFieldID === 6) {
                if (this.deliveryPoint0 && this.deliveryPoint1 && this.arr['deliveryPoint2'] && this.arr['deliveryPoint3'] && this.arr['deliveryPoint4'] && this.arr['deliveryPoint5']) {return true;}
            }

            if (this.nextAddressFieldID === 7) {
                if (this.deliveryPoint0 && this.deliveryPoint1 && this.arr['deliveryPoint2'] && this.arr['deliveryPoint3'] && this.arr['deliveryPoint4'] && this.arr['deliveryPoint5'] && this.arr['deliveryPoint6']) {return true;}
            }

            if (this.nextAddressFieldID === 8) {
                if (this.deliveryPoint0 && this.deliveryPoint1 && this.arr['deliveryPoint2'] && this.arr['deliveryPoint3'] && this.arr['deliveryPoint4'] && this.arr['deliveryPoint5'] && this.arr['deliveryPoint6'] && this.arr['deliveryPoint7']) {return true;}
            }

            this.errors = [];

            if (!this.deliveryPoint0){this.errors.push(1);}
            if (!this.deliveryPoint1){this.errors.push(2);}

            for (let a = 2; a < this.nextAddressFieldID; a++){
                if (!this.arr['deliveryPoint' + a]){this.errors.push(a + 1);}
            }

            this.$store.commit('UPDATEMESSAGETEXT', `The Field [${this.errors}] is empty! Fill or remove it.`)
            this.$store.commit('DEACTIVATELOADINGSPINNER')
            this.$store.dispatch('ERASEMESSAGETEXT')
            e.preventDefault();
        },

        // create a object to send the address input
        createallAddressObject(){
            this.allAddressObject = {
                address: 
                    Object.assign({deliveryPoint0: this.deliveryPoint0}, {deliveryPoint1: this.deliveryPoint1}, this.arr),
                otherParameters: 
                    Object.assign({fuelConsumption: this.fuelConsumption}, {fuelPrice: this.fuelPrice})
            }
            this.$store.dispatch('checkIfAddressAreCorrect', this.allAddressObject)
            // this.$store.dispatch('travellingSalesmanProblem', this.allAddressObject)
            this.allAddressObject = []
        },

        // create a new field address inside the html
        addAddressField() {
            // if the user is logged, the limit is 12 addresses, otherwise it is 6.
            if (this.$store.state.AUTHENTICATEd === true){
                if (this.nextAddressFieldID < 12) {
                const id = 'deliveryPoint' + this.nextAddressFieldID++
                    this.AddressFieldObject.push({
                        id,
                        title: this.newAddressField
                        })
                this.arr[id] = ''
                this.newAddressField = ''

                } else {
                    this.$store.commit('UPDATEMESSAGETEXT', 'The website does not support more than 12 addresses.')
                    this.$store.dispatch('ERASEMESSAGETEXT')
                }
            } else {
                if (this.nextAddressFieldID < 6) {
                const id = 'deliveryPoint' + this.nextAddressFieldID++
                    this.AddressFieldObject.push({
                        id,
                        title: this.newAddressField
                        })
                this.arr[id] = ''
                this.newAddressField = ''

            } else {
                this.$store.commit('UPDATEMESSAGETEXT', 'You must be logged to have access to more ckeckpoints!')
                this.$store.dispatch('ERASEMESSAGETEXT')
            }
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