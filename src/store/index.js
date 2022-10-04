import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        distancia: 0,
        bindKey: 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9',
        addressOrigin: '-',
        addressDeliveryPoint: ''
    },
    getters: {
    },
    mutations: {
        mainCalculateDistance(state, payload){
            axios.get('http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' + payload[0] + '&wp.1=' + payload[1] + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS')
            .then(response => {
                state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
                console.log(response)
            })
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
