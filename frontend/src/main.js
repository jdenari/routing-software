import 'bootstrap/dist/css/bootstrap.css'
import 'vue-popperjs/dist/vue-popper.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

createApp(App).use(store).use(router).mount('#app')