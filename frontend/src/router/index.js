import { createRouter, createWebHistory } from 'vue-router'
import SigninPage from '../pages/SigninPage.vue'
import LandingPage from '../pages/LandingPage.vue'
import ClientPage from '../pages/ClientPage.vue'
const routes =  [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/LoginPage",
        component: SigninPage
    },
    {
        path: "/ClientPage",
        component: ClientPage
    },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;