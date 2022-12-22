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
        output: {}
    },
    getters: {
    },
    mutations: {

        travellingSalesmanProblemMutation: (state, data) => {

            let totalDistance = 0
            let totalCost = 0

            // calculate cost and distance total
            for (let n = 0; n < Object.keys(data).length; n++){
                totalDistance = Number(data[n].distance) + Number(totalDistance)
                totalCost = Number(data[n].fuelCost) + Number(totalCost)
            }

            // update the items states
            for (let n = 0; n < Object.keys(data).length; n++){
                state.output[n] = data[n]
            }

            // update the state with total info
            state.output[state.quantityLimitAddress] = { 
                address: '-',
                distance: totalDistance,
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: totalCost
            }
        },

        cleanLatestValues () {
            for (let e = 0; e < this.state.quantityLimitAddress; e++){
                this.state.output[e] = { 
                    address: '-',
                    distance: '-',
                    cost: '-',
                    fuelConsumption: '-',
                    fuelPrice: '-',
                    fuelCost: '-'
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

        async travellingSalesmanProblem({commit, dispatch}, input){
            commit('cleanLatestValues')
            let destinyVariable
            let originVariable
            let shortestDistance = 0
            let shortestAddress
            let index

            // first information with origin
            let outputDraft = {
                0: {
                    address: input.address.deliveryPoint0.toUpperCase(),
                    distance: 0,
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: input.otherParameters.fuelPrice,
                    fuelCost: '-'
                }
            }

            // slits the origin and the rest into variables
            originVariable = input.address.deliveryPoint0
            destinyVariable = Object.values(input.address)
            destinyVariable.splice(0,1)

            // pick up the origin
            for (let c = 0; c < Object.keys(input.address).length -1; c++){

                // pick up the possible destinations
                for (let n = 0; n < Object.values(destinyVariable).length; n++){

                    // distance calculation from API
                    let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                    + originVariable
                    + '&wp.1=' + Object.values(destinyVariable)[n]
                    + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'

                    try{
                        const responseAPI = await axios.get(url)
                        let response = responseAPI.data['resourceSets'][0]['resources'][0]['travelDistance']

                        // if it is the first verification
                        if (shortestDistance === 0){
                            shortestDistance = response
                            shortestAddress = destinyVariable[n]
                            index = n

                        // if the new value is lower than shortest distance, change it
                        } else if (shortestDistance > response){
                            shortestDistance = response
                            shortestAddress = destinyVariable[n]
                            index = n
                        }

                    // if something goes wrong
                    } catch(error){
                        await dispatch('messageAlert')
                        this.travellingSalesmanProblem.preventDefault()
                    }
                }

                // input into output the shorstest checkpoint
                outputDraft[c + 1] = { 
                    address: shortestAddress.toUpperCase(),
                    distance: shortestDistance.toFixed(2), 
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: input.otherParameters.fuelPrice,
                    fuelCost: '-'
                }

                // reset all variable to make another round
                originVariable = destinyVariable[index]
                destinyVariable.splice(index,1)
                shortestDistance = 0
                shortestAddress = ''
                index = 0
            }

            // calculates the cost total
            for (let c = 0; c < Object.keys(outputDraft).length; c++){
                if (outputDraft[c].distance != '-'){
                    outputDraft[c].fuelCost = Number(outputDraft[c].distance) * Number(outputDraft[c].fuelPrice) / Number(outputDraft[c].fuelConsumption)
                }
            }

            // calls the mutation to change it on frontend
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
            
            // calls the mutation to change it on frontend
            commit('cepSearchAPIMutation', { response })
        },
        
        // erase the main alert message after 3 seg
        eraseMessageText({commit}){
            setTimeout(() => {
                commit('eraseMessageText')}, "3000"
            )
        }
    },
    modules: {
    }
})
