import { createRouter, createWebHistory } from 'vue-router'
import SigninPage from '../pages/SigninPage.vue'
import LandingPage from '../pages/LandingPage.vue'
import ClientPage from '../pages/ClientPage/index.vue'
import UpdateProfile from '../pages/ClientPage/UpdateProfile.vue'
import ActionsRecorded from '../pages/ClientPage/ActionsRecorded.vue'
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
        path: "/Client/Home",
        component: ClientPage
    },
    {
        path: "/Client/UpdateProfile",
        component: UpdateProfile
    },
    {
        path: "/Client/ActionsRecorded",
        component: ActionsRecorded
    },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;