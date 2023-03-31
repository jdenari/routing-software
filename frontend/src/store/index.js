import { createStore } from 'vuex'
import router from '../router/index'
import axios from 'axios'
export default createStore({
    state: {
        // dev env: http://localhost:5000
        // pro env: https://routehelper.online
        url: 'https://routehelper.online',

        bindKey: 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9',
        registerOrLogin: 'Login',
        functionCalculate: 'travellingSalesman', 
        cepFullAddress: '-',
        messageText: null,
        authenticated: false,
        quantityLimitAddress: 6,
        loadingSpinner: false,
        modalYesNo: false,
        token: null, 
        userId: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        output: {},
        addressesExample: null
    },
    getters: {
    },
    mutations: {

        SPLITRESULT: (state, data) => {

            let totalDistance = 0
            let totalCost = 0

            // calculate cost and distance total
            for (let n = 0; n < Object.keys(data).length; n++){
                totalDistance = Number(data[n].distance) + Number(totalDistance)
                totalCost = Number(data[n].fuelCost) + Number(totalCost)
                
                if (!isNaN(totalCost)) {
                    totalCost = totalCost.toFixed(2);
                }
            }

            // update the items states
            for (let n = 0; n < Object.keys(data).length; n++){
                state.output[n] = data[n]
            }

            // update the state with total info
            state.output[state.quantityLimitAddress] = { 
                address: '-',
                distance: totalDistance.toFixed(2),
                cost: '-',
                fuelConsumption: '-',
                fuelPrice: '-',
                fuelCost: totalCost
            }
        },

        CLEANLATESTVALUES: (state) => {state.output = {}},

        CEPSEARCHMUTATION: (state, {response}) => {state.cepFullAddress = response},

        CHANGETOLOGIN: (state) => {state.registerOrLogin = 'Login'},

        CHANGETOREGISTER: (state) => {state.registerOrLogin = 'Register'},

        CHANGEMODALYESNO: (state) => {state.modalYesNo == true ? state.modalYesNo = false : state.modalYesNo = true},

        ACTIVATELOADINGSPINNER: (state) => {state.loadingSpinner = true },

        DEACTIVATELOADINGSPINNER: (state) => {state.loadingSpinner = false },

        AUTHENTICATE: (state, data) => {
            state.authenticated = true,
            state.quantityLimitAddress = 12,
            state.token = data.token,
            state.userId = data.userId,
            state.firstName = data.firstName,
            state.lastName = data.lastName,
            state.email = data.email
        },

        DEAUTHENTICATE: (state) => {
            state.authenticated = false,
            state.quantityLimitAddress = 6,
            state.modalYesNo = false,
            state.token = null, 
            state.userId = null,
            state.firstName = null,
            state.lastName = null,
            state.email = null
        },

        UPDATEMESSAGETEXT: (state, data) => {state.messageText = data},

        ERASEMESSAGETEXT: (state) => {state.messageText = null},

        CHANGEFUNCTIONTOTRAVELLINGSALESMAN: (state) => {state.functionCalculate = 'travellingSalesman'},

        CHANGEFUNCTIONTOYOURSEQUENCE: (state) => {state.functionCalculate = 'yourSequence'},

        FILLWITHADDRESSES: (state, payload) => {state.addressesExample = payload}
    },
    actions: {

        async checkIfAddressAreCorrect({dispatch, commit, state}, input){

            for (let n = 0; n < Object.values(input.address).length; n++){
                // distance calculation from API
                let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                + 'RUA EDGARD WERNECK, 1016 - CIDADE DE DEUS, RIO DE JANEIRO - RJ, 22763011'
                + '&wp.1=' +  Object.values(input.address)[n]
                + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'
                try{
                    const responseAPI = await axios.get(url)
                    responseAPI.data['resourceSets'][0]['resources'][0]['travelDistance']

                // if something goes wrong
                } catch(error){
                    commit('UPDATEMESSAGETEXT', `The address on ${n+1}º field is wrong. Try to correct it!`)
                    commit('DEACTIVATELOADINGSPINNER')
                    dispatch('eraseMessageText')
                    this.checkIfAddressAreCorrect.preventDefault()
                }
            }

            if (state.functionCalculate == 'travellingSalesman'){dispatch('travellingSalesmanProblem', input)}
            if (state.functionCalculate == 'yourSequence'){dispatch('yourSequence', input)}
        },

        async sendAddressToDatabase({ state }, payload) {
            try {
                const dataToSend = {}
                const keys = Object.keys(payload);
            
                for (let i of keys) {
                    const item = payload[i];
                    
                    const objToSend = {
                        address: item.address,
                        lastData: new Date().toLocaleDateString("pt-BR"),
                        idUser: state.userId,
                        fullName: `${state.firstName} ${state.lastName}`,
                        distance: item.distance,
                        fullCost: (Number(item.distance) * Number(item.fuelPrice) / Number(item.fuelConsumption)).toFixed(2)
                    }
                dataToSend[i] = objToSend;
                }
          
                const response = await fetch(`${state.url}/api/addresUser/saveAddressUser`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dataToSend),
                })
          
                if (!response.ok) {throw new Error(`HTTP error ${response.status}`);}
                
                } catch (error) {console.error("Error sending data to the database:", error);}
        },

        async travellingSalesmanProblem({commit, state, dispatch}, input){
            commit('CLEANLATESTVALUES')
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
                        commit('DEACTIVATELOADINGSPINNER')
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
                if (outputDraft[c].distance != '-') {
                    let fuelCost = Number(outputDraft[c].distance) * Number(outputDraft[c].fuelPrice) / Number(outputDraft[c].fuelConsumption);
                    if (!isNaN(fuelCost)) {
                        outputDraft[c].fuelCost = Number(fuelCost.toFixed(2));
                    }
                }
            }

            // calls the mutation to change it on frontend
            commit('SPLITRESULT', outputDraft)
            commit('DEACTIVATELOADINGSPINNER')
            
            if (state.authenticated == true){dispatch('sendAddressToDatabase', outputDraft)}
        },

        async yourSequence ({commit, state, dispatch}, input){
            commit('CLEANLATESTVALUES')
            let destinyVariable
            let originVariable
            let shortestDistance = 0
            let shortestAddress

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

            for (let c = 0; c < Object.keys(input.address).length -1; c++){
                
                let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                    + originVariable
                    + '&wp.1=' + Object.values(destinyVariable)[0]
                    + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'

                try{
                    const responseAPI = await axios.get(url)
                    shortestDistance = responseAPI.data['resourceSets'][0]['resources'][0]['travelDistance']
                    shortestAddress = destinyVariable[0]

                // if something goes wrong
                } catch(error){
                    this.travellingSalesmanProblem.preventDefault()
                    commit('DEACTIVATELOADINGSPINNER')
                }

                outputDraft[c + 1] = { 
                    address: shortestAddress.toUpperCase(),
                    distance: shortestDistance.toFixed(2), 
                    cost: 0,
                    fuelConsumption: input.otherParameters.fuelConsumption,
                    fuelPrice: input.otherParameters.fuelPrice,
                    fuelCost: '-'
                }
                originVariable = destinyVariable[0]
                destinyVariable.splice(0,1)
                shortestDistance = 0
                shortestAddress = ''
            }

            // calculates the cost total
            for (let c = 0; c < Object.keys(outputDraft).length; c++){
                if (outputDraft[c].distance != '-') {
                    let fuelCost = Number(outputDraft[c].distance) * Number(outputDraft[c].fuelPrice) / Number(outputDraft[c].fuelConsumption);
                    if (!isNaN(fuelCost)) {
                        outputDraft[c].fuelCost = Number(fuelCost.toFixed(2));
                    }
                }
            }

            // calls the mutation to change it on frontend
            commit('SPLITRESULT', outputDraft)
            commit('DEACTIVATELOADINGSPINNER')
            if (state.authenticated == true){dispatch('sendAddressToDatabase', input)}
        },

        // search the full correct name of the address using API
        async cepSearchAPI ({commit}, cepObject){
            
            let url = `https://viacep.com.br/ws/${cepObject.cepAddress}/json/`
            let response

            try{
                const responseAPI = await axios.get(url)
                response = `${responseAPI.data['logradouro']}, ${cepObject.cepNumber},  ${responseAPI.data['bairro']}, ${responseAPI.data['localidade']} - ${responseAPI.data['uf']}, ${responseAPI.data['cep']}`
                response = response.toUpperCase()  

            } catch(error){
                console.log('Erro na requisição da API')
                commit('DEACTIVATELOADINGSPINNER')
            }
            
            // calls the mutation to change it on frontend
            commit('CEPSEARCHMUTATION', { response })
        },
        
        // erase the main alert message after 3 seg
        eraseMessageText({commit}){
            setTimeout(() => {
                commit('ERASEMESSAGETEXT')}, "3000"
            )
        },

        async loginVerification({commit, dispatch, state}, dataObject){
            const jsonDataObject = JSON.stringify(dataObject)
            await fetch(`${state.url}/api/auth/login`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            // it access the api to update the profile data using token and the object
            .then((data) => {
                if(data.error){
                    // it prints the error
                    commit('UPDATEMESSAGETEXT', data.error)
                    dispatch('eraseMessageText')
                } else {
                    // it takes to the dashboard page and commit all the page with the user info
                    commit('CLEANLATESTVALUES')
                    router.push({ path: '/Client/Home' })
                    commit("AUTHENTICATE", {
                        token: data.token, 
                        userId: data.userId, 
                        firstName: data.firstName, 
                        lastName: data.lastName,
                        email: data.email,
                    })
                }
            })
        },
        async registerNewUser({commit, state, dispatch}, dataObject){
            const jsonDataObject = JSON.stringify(dataObject)
            await fetch(`${state.url}/api/auth/register`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.error){
                    // it prints the error
                    commit('UPDATEMESSAGETEXT', data.error)
                    dispatch('eraseMessageText')
                } else {
                    commit('CHANGETOLOGIN')
                }
            })
        },

        async updateProfile({commit, dispatch, state}, dataObject){
            const jsonDataObject = JSON.stringify(dataObject)
            await fetch(`${state.url}/api/user/profile`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend and it commits all changes made
                commit('UPDATEMESSAGETEXT', data.error)
                dispatch('eraseMessageText')
                commit("AUTHENTICATE", {
                    token: data.data.token, 
                    userId: data.data.userId, 
                    firstName: data.data.firstName, 
                    lastName: data.data.lastName,
                    email: data.data.email
                })
            })
        },

        async updatePassword({commit, dispatch, state}, dataObject){
            const jsonDataObject = JSON.stringify(dataObject)
            await fetch(`${state.url}/api/user/password`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend and it commits all changes made
                commit('UPDATEMESSAGETEXT', data.error)
                dispatch('eraseMessageText')
            })
        },

        async fillWithAddresses({state, commit}){
            await fetch(`${state.url}/api/address/addressesExample`, {
                method: "GET",
                headers: {},
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend and it commits all changes made
                commit('FILLWITHADDRESSES', data)
            })
        }
    },
    modules: {
    }
})
