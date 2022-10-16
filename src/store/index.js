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
            8: {
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

        async travellingSalesmanProblem({commit, state}, input){
    
            let destinyVariable
            let originVariable
            let shortestDistance = 0
            let shortestAddress
            let shortestFuel
            let index
            let output
            let totalDistance = 0
            let totalFuelCost = 0

            output = state.output

            output[0] = {
            
                address: input.address.deliveryPoint0.toUpperCase(),
                distance: 0,
                cost: 0,
                fuelConsumption: input.otherParameters.fuelConsumption,
                fuelPrice: 0
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
                            shortestFuel = shortestDistance * input.otherParameters.fuelPrice / input.otherParameters.fuelConsumption
                            index = n

                        } else if (shortestDistance > response){

                            shortestDistance = response
                            shortestAddress = destinyVariable[n]
                            shortestFuel = shortestDistance * input.otherParameters.fuelPrice / input.otherParameters.fuelConsumption
                            index = n
                        }
                    } catch(error){console.log('Erro na requisição da API')}
                }

                output[c + 1] = { 
                    address: shortestAddress.toUpperCase(),
                    distance: shortestDistance.toFixed(2), 
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: shortestFuel.toFixed(2)
                }

                originVariable = destinyVariable[index]
                destinyVariable.splice(index,1)
                shortestDistance = 0
                shortestAddress = ''
                shortestFuel = ''
                index = 0
            }

            for (let e = 0; e < Object.keys(input.address).length; e++){

                if (output[e].distance != ''){
                    totalDistance = totalDistance + Number(output[e].distance)
                    totalFuelCost = totalFuelCost + Number(output[e].fuelPrice)
                }

            }

            output[8] = { 
                address: '-',
                distance: totalDistance.toFixed(2),
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: totalFuelCost.toFixed(2)
            }

            commit('travellingSalesmanProblemMutation', { output })
        }
    },
    modules: {
    }
})
