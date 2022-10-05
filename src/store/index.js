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

            console.log(Object.keys(payload).length)

            if(Object.keys(payload).length === 2){

                let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' 
                + payload.origin 
                + '&wp.1=' + payload.destiny
                + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'
                console.log(url)

                axios.get(url)
                .then(response => {
                state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
            })
            
        
            } if(Object.keys(payload).length === 3){

                let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' 
                + payload.origin 
                + '&wp.1=' + payload.deliveryPoint1 
                + '&wp.2=' + payload.destiny
                + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'
                console.log(url)
                
                axios.get(url)
                .then(response => {
                state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
            })
            

            } if(Object.keys(payload).length === 4){

                let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' 
                + payload.origin 
                + '&wp.1=' + payload.deliveryPoint1 
                + '&wp.2=' + payload.deliveryPoint2
                + '&wp.3=' + payload.destiny
                + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'
                console.log(url)
                
                axios.get(url)
                .then(response => {
                state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
            })
            

            } if(Object.keys(payload).length === 5){

                let url = 'http://dev.virtualearth.net/REST/V1/routes/Driving?wp.0=' 
                + payload.origin 
                + '&wp.1=' + payload.deliveryPoint1 
                + '&wp.2=' + payload.deliveryPoint2 
                + '&wp.3=' + payload.deliveryPoint3
                + '&wp.4=' + payload.destiny
                + '/&key=' + 'AozZGLcvhDECgWnjhqzTzjpCOc0yuBDHn6d16Rd7rsVi4mAkgx-J9qsHRWzh9NOS'
                console.log(url)
                
                axios.get(url)
                .then(response => {
                state.distancia = response.data['resourceSets'][0]['resources'][0]['travelDistance']
            })
            

            }
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
