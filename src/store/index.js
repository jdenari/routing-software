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
        mainCalculateDistance(state){
            axios.get('http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' + 'Rua Edgard Werneck, 1016, Cidade de Deus, Rio de Janeiro - Rio de Janeiro, 22763, Brazil' + '&wp.1=' + 'R. Bárbara Knippelberg Loureiro, 203 - Vila Ema, São José dos Campos - SP, 12243-040' + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS')
            .then(response => {
                state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
            })
        }
    },
    actions: {
        mainCalculateDistance(state){
            state.commit('mainCalculateDistance');
        }
    },
    modules: {
    }
})
