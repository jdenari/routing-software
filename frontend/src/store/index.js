import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        bindKey: 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9',
        registerOrLogin: 'Login',
        cepFullAddress: '-',
        messageText: null,
        authenticated: false,
        quantityLimitAddress: 8,
        modalYesNo: false,
        token: null, 
        userId: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
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

        travellingSalesmanProblemMutation: (state, data) => {
            // updating the items states
            for (let n = 0; n < Object.keys(data).length; n++){
                state.output[n] = data[n]
            }
        },

        cleanLatestValues () {
            for (let e = 0; e < this.state.quantityLimitAddress; e++){
                this.state.output[e] = { 
                    address: '-',
                    distance: '-',
                    cost: '-',
                    fuelConsumption: '-',
                    fuelPrice: '-'
                }
            }
        },

        cepSearchAPIMutation: (state, {response}) => {
            state.cepFullAddress = response
        },

        changeToLogin: (state) => {
            state.registerOrLogin = 'Login'
        },

        changeToRegister: (state) => {
            state.registerOrLogin = 'Register'
        },

        changeModalYesNo: (state) => {
            state.modalYesNo == true ? state.modalYesNo = false : state.modalYesNo = true
        },

        authenticate: (state, data) => {
            state.authenticated = true,
            state.quantityLimitAddress = 16,
            state.token = data.token,
            state.userId = data.userId,
            state.firstName = data.firstName,
            state.lastName = data.lastName,
            state.email = data.email
        },

        deauthenticate: (state) => {
            state.authenticated = false,
            state.quantityLimitAddress = 8,
            state.modalYesNo = false,
            state.token = null, 
            state.userId = null,
            state.firstName = null,
            state.lastName = null,
            state.email = null
        },

        updateMessageText: (state, data) => {
            state.messageText = data
        },

        eraseMessageText: (state) => {
            state.messageText = null
        }
    },
    actions: {

        // async calculateFuelCost({state}){
        //     // for (let c = 0; c < state.quantityLimitAddress - 1; c++){
        //     //     if (state.outputDraft[c].distance != '-'){
        //     //         state.outputDraft[c].fuelCost = Number(state.outputDraft[c].distance) * Number(state.outputDraft[c].fuelPrice) / Number(state.outputDraft[c].fuelConsumption)
        //     //     }
        //     // }
        // },

        // async calculateTotal ({state}){
        //     state.outputDraft[8].distance = 0
        //     state.outputDraft[8].fuelCost = 0
        //     for (let c = 0; c < Object.keys(state.outputDraft).length - 1; c++){
        //         if (state.outputDraft[c].distance != '-'){
        //             state.outputDraft[8].distance = Number(state.outputDraft[8].distance) + Number(state.outputDraft[c].distance)
        //             state.outputDraft[8].fuelCost = Number(state.outputDraft[8].fuelCost) + Number(state.outputDraft[c].fuelCost)
        //         }
        //     }
        //     state.outputDraft[8].distance = state.outputDraft[8].distance.toFixed(2)
        //     state.outputDraft[8].fuelCost = state.outputDraft[8].fuelCost.toFixed(2)
        // },

        async travellingSalesmanProblem({commit, dispatch}, input){
            commit('cleanLatestValues')
            let destinyVariable
            let originVariable
            let shortestDistance = 0
            let shortestAddress
            let index
            let outputDraft = {
                0: {
                    address: input.address.deliveryPoint0.toUpperCase(),
                    distance: 0,
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: input.otherParameters.fuelPrice
                }
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
                    } catch(error){
                        await dispatch('messageAlert')
                        this.travellingSalesmanProblem.preventDefault()
                    }
                }
                outputDraft[c + 1] = { 
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

            // await dispatch('calculateFuelCost')
            // await dispatch('calculateTotal')
            commit('travellingSalesmanProblemMutation', outputDraft)
        },
        // search the full correct name of the address using API
        async cepSearchAPI ({commit}, cepObject){
            
            let url = `https://viacep.com.br/ws/${cepObject.cepAddress}/json/`
            let response
            try{

                const responseAPI = await axios.get(url)
                response = `${responseAPI.data['logradouro']}, ${cepObject.cepNumber},  ${responseAPI.data['bairro']}, ${responseAPI.data['localidade']} - ${responseAPI.data['uf']}, ${responseAPI.data['cep']}`
                response = response.toUpperCase()  
            } catch(error){console.log('Erro na requisição da API')}
            commit('cepSearchAPIMutation', { response })
        },
        // erase the main alert message after 3 seg
        eraseMessageText({commit}){
            setTimeout(() => {
                commit('eraseMessageText')
            }, "3000")
        }
    },
    modules: {
    }
})
