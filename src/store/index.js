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
                fuelPrice: '-'
            },
            1: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
            2: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
            3: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
            4: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
            5: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
            6: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
            7: {
                address: '-',
                distance: '-',
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-'
            },
        }
    },
    getters: {
    },
    mutations: {
        travellingSalesmanProblemMutation: (state, { output }) => {
            
            // updating the items states with values and '-' (an empty space)
            for (let n = 0; n < Object.keys(state.output).length; n++){
                if (n < Object.keys(output).length){
                    state.output[n] = output[n]
                } else {
                    state.output[n] = {
                        address: '-',
                        distance: '-',
                        cost: '-',
                        fuelConsumption: '-',
                        fuelPrice: '-'
                    }
                }
            }
        },
    },
    actions: {

        async travellingSalesmanProblem({commit}, input){
    
            let destinyVariable
            let originVariable
            let shortestDistance
            let shortestAddress
            let shortestFuel
            let output

            for (let c = 0; c < Object.keys(input.address).length -1; c++){

                if (c === 0){

                    output = {
                        0: {
                            address: input.address.deliveryPoint0,
                            distance: 0,
                            cost: 0,
                            fuelConsumption: input.otherParameters.fuelConsumption,
                            fuelPrice: 0
                        }
                    }

                    originVariable = input.address.deliveryPoint0
                    destinyVariable = Object.values(input.address)
                } 

                for (let n = 0; n < Object.values(destinyVariable).length; n++){
                    console.log(Object.values(destinyVariable).length)
                    let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                    + originVariable
                    + '&wp.1=' + Object.values(destinyVariable)[n]
                    + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'

                    try{
                        const responseAPI = await axios.get(url)
                        let response = responseAPI.data['resourceSets'][0]['resources'][0]['travelDistance']

                        if (n === 1){

                            shortestDistance = response
                            shortestAddress = input.address[`deliveryPoint${n}`]
                            shortestFuel = input.otherParameters.fuelConsumption * shortestDistance

                        } else if (shortestDistance > response){

                            shortestDistance = response
                            shortestAddress = input.address[`deliveryPoint${n}`]
                            shortestFuel = input.otherParameters.fuelConsumption * shortestDistance
                        }
                    } catch(error){console.log('Erro na requisição da API')}
                }
                
                destinyVariable.pop(shortestAddress)

                output[c + 1] = { 
                    address: shortestAddress,
                    distance: shortestDistance,
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: shortestFuel.toFixed(2)
                } 
            }

            console.log(output)
            commit('travellingSalesmanProblemMutation', { output })
        }
    },
    modules: {
    }
})
