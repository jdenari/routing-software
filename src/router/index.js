import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import LandingPage from '../pages/LandingPage.vue'
const routes =  [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/LoginPage",
        component: LoginPage
    },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;