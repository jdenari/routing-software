import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        bindKey: 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9',
        output: {
            0: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            1: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            2: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            3: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            4: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            5: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            6: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            7: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
            8: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: '-'
            },
        }
    },
    getters: {
    },
    mutations: {
        
        travellingSalesmanProblemMutation: (state, { output }) => {
            
            // updating the items states
            for (let n = 0; n < Object.keys(state.output).length; n++){

                state.output[n] = output[n]
            }
        },
    },
    actions: {

        async cleanLatestValues ({ state}) {

            for (let e = 0; e < Object.keys(state.output).length; e++){
                state.output[e] = { 
                    address: '-',
                    distance: '-',
                    cost: '-',
                    fuelConsumption: '-',
                    fuelPrice: '-'
                }
            }
        },

        async calculateFuelCost({state}, output ){

            for (let c = 0; c < Object.keys(output).length - 1; c++){
                
                if (state.output[c].distance != '-'){

                    state.output[c].fuelCost = Number(output[c].distance) * Number(state.output[c].fuelPrice) / Number(state.output[c].fuelConsumption)
                }
            }
        },

        async calculateTotal ({state}, output ){

            output[8].distance = 0
            output[8].fuelCost = 0
            
            for (let c = 0; c < Object.keys(output).length - 1; c++){
                
                if (output[c].distance != '-'){

                    output[8].distance = Number(output[8].distance) + Number(output[c].distance)
                    output[8].fuelCost = Number(output[8].fuelCost) + Number(output[c].fuelCost)
                }
            }

            state.output[8].distance = output[8].distance.toFixed(2)
            state.output[8].fuelCost = output[8].fuelCost.toFixed(2)
        },

        async travellingSalesmanProblem({commit, state, dispatch}, input){
    
            await dispatch('cleanLatestValues')

            let destinyVariable
            let originVariable
            let shortestDistance = 0
            let shortestAddress
            let index
            let output = state.output

            output[0] = {
            
                address: input.address.deliveryPoint0.toUpperCase(),
                distance: 0,
                cost: 0,
                fuelConsumption: input.otherParameters.fuelConsumption,
                fuelPrice: input.otherParameters.fuelPrice
            }

            originVariable = input.address.deliveryPoint0
            destinyVariable = Object.values(input.address)
            destinyVariable.splice(0,1)
            
            for (let c = 0; c < Object.keys(input.address).length -1; c++){

                for (let n = 0; n < Object.values(destinyVariable).length; n++){
                    
                    let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                    + originVariable
                    + '&wp.1=' + Object.values(destinyVariable)[n]
                    + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'

                    try{
                        const responseAPI = await axios.get(url)
                        let response = responseAPI.data['resourceSets'][0]['resources'][0]['travelDistance']

                        if (shortestDistance === 0){

                            shortestDistance = response
                            shortestAddress = destinyVariable[n]
                            index = n

                        } else if (shortestDistance > response){

                            shortestDistance = response
                            shortestAddress = destinyVariable[n]
                            index = n
                        }
                    } catch(error){console.log('Erro na requisição da API')}
                }

                output[c + 1] = { 
                    address: shortestAddress.toUpperCase(),
                    distance: shortestDistance.toFixed(2), 
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: input.otherParameters.fuelPrice
                }

                originVariable = destinyVariable[index]
                destinyVariable.splice(index,1)
                shortestDistance = 0
                shortestAddress = ''
                index = 0
            }

            await dispatch('calculateFuelCost', output)

            await dispatch('calculateTotal', output)

            commit('travellingSalesmanProblemMutation', { output })
        }
    },
    modules: {
    }
})
