import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        bindKey: 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9',
        finalDistancesObject: {
            0: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            1: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            2: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            3: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            4: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            5: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            6: {
                address: '-',
                distance: '-',
                cost: '-'
            },
            7: {
                address: '-',
                distance: '-',
                cost: '-'
            },
        }
    },
    getters: {
    },
    mutations: {
        async travellingSalesmanProblem(state, payload){

            // creating variables address to use inside the for's
            let originCheckpoint = payload[0]
            let destinyCheckpoint = payload.slice(1)

            let shortestDistance
            let shortestAddress

            state.finalDistancesObject[0] = { 
                address: originCheckpoint,
                distance: 0,
                cost: 0
            }

            // adding the origin address and 0 distance as 1st value object
            // state.finalDistancesObject[originCheckpoint] = 0

            // variation to the origin point
            for (let c = 0; c < payload.length -1; c++){

                // variation to the destiny point
                for (let e = 0; e < destinyCheckpoint.length; e++){
                    
                    // creating the url for all combinations
                    let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0='
                    + originCheckpoint
                    + '&wp.1=' + destinyCheckpoint[e]
                    + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'

                    // calculating the distance using the API
                    try{
                        const response = await axios.get(url)
                        let distance = response.data['resourceSets'][0]['resources'][0]['travelDistance']
                        
                        // Attributes the first distance and address inside a variable
                        if (e === 0){
                            
                            shortestDistance = distance
                            shortestAddress = destinyCheckpoint[e]

                        // Attributes the shortest distance and address inside a variable
                        } else if (shortestDistance > distance){

                            shortestDistance = distance
                            shortestAddress = destinyCheckpoint[e]

                        }
                    } catch(error){console.log('Erro na requisição da API')
                    }
                }
                
                // removing the shorstest address and adding the next origin to check next checkpoint
                destinyCheckpoint.pop(shortestAddress)
                originCheckpoint = shortestAddress

                // adding the checkpoint info to the final object
                if (c < payload.length) {
                    state.finalDistancesObject[c + 1] = { 
                        address: shortestAddress,
                        distance: shortestDistance.toFixed(1),
                        cost: 0
                    }
                }
            }
        console.log(state.finalDistancesObject)
        }
    },
    actions: {
        travellingSalesmanProblem(state, payload){
            state.commit('travellingSalesmanProblem', payload);
        }
    },
    modules: {
    }
})
