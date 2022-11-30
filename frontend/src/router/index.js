import { createRouter, createWebHistory } from 'vue-router'
import SigninPage from '../pages/SigninPage.vue'
import LandingPage from '../pages/LandingPage.vue'
const routes =  [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/LoginPage",
        component: SigninPage
    },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;