import 'bootstrap/dist/css/bootstrap.css'
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

export default {
    components: {
      'popper': Popper
    },
}