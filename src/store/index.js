import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        distancia: 0,
        bindKey: 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9',
        addressOrigin: '-',
        addressDeliveryPoint: '',
        distancesList: [], 
        distancesBetweenAllCombinationList: 0,
        checkPoints: 0,
        list: [],
        b: 0,
        destinyCheckpoints: [],
        listDestinyCheckpoint: [],
        listOriginCheckpoint: ''
    },
    getters: {
    },
    mutations: {
        async mainCalculateDistance(state, payload){

            // variation to the origin point
            for (let c = 0; c < payload.length; c++){

                if (c === 0){
                    state.listDestinyCheckpoint = payload.slice(1)
                    state.listOriginCheckpoint = payload[0]
                }

                // variation to the destiny point
                for (let e = 0; e < state.listDestinyCheckpoint.length; e++){
                    
                    // creating the url for all combinations
                    let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                    + state.listOriginCheckpoint
                    + '&wp.1=' + state.listDestinyCheckpoint[e]
                    + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'

                    console.log(url)

                    // calculating the distance using the API
                    try{
                        const response = await axios.get(url)
                        let distance = response.data['resourceSets'][0]['resources'][0]['travelDistance']
                        
                        if (e === 0){
                            state.distancesBetweenAllCombinationList = distance
                            state.checkPoints = state.listDestinyCheckpoint[e]
                        } else if (state.distancesBetweenAllCombinationList > distance){
                            state.distancesBetweenAllCombinationList = distance
                            state.checkPoints = state.destinyCheckpoints[e]
                        }
                    } catch(error){
                        console.log('Erro na requisição da API')
                    }
                
                }

                if (c === 0){
                    state.list[state.listOriginCheckpoint] = 0
                }

                state.list[state.checkPoints] = state.distancesBetweenAllCombinationList
                state.distancesBetweenAllCombinationList = 0

                state.listOriginCheckpoint = state.checkPoints
                delete state.listDestinyCheckpoint[state.checkPoints]
            }
            console.log(state.list)
        }
    },
    actions: {
        mainCalculateDistance(state, payload){
            state.commit('mainCalculateDistance', payload);
        }
    },
    modules: {
    }
})
