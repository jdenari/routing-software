import { createRouter, createWebHistory } from 'vue-router'
import SigninPage from '../pages/SigninPage.vue'
import LandingPage from '../pages/LandingPage.vue'
import ClientPage from '../pages/ClientPage/index.vue'
import UpdateProfile from '../pages/ClientPage/UpdateProfile.vue'
import ActionsRecorded from '../pages/ClientPage/ActionsRecorded.vue'
import store from '../store'

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/LoginPage',
        component: SigninPage,
    },
    {
        path: '/Client/Home',
        component: ClientPage,
        beforeEnter: (to, from, next) => {
            const authenticated = store.state.authenticated
            console.log(authenticated)
            if (!authenticated) {
                next('/LoginPage')
            } else {
                next()
            }
        },
    },    
    {
        path: '/Client/UpdateProfile',
        component: UpdateProfile,
        beforeEnter: (to, from, next) => {
            const authenticated = store.state.authenticated
            console.log(authenticated)
            if (!authenticated) {
                next('/LoginPage')
            } else {
                next()
            }
        },
    },
    {
        path: '/Client/ActionsRecorded',
        component: ActionsRecorded,
        beforeEnter: (to, from, next) => {
            const authenticated = store.state.authenticated
            console.log(authenticated)
            if (!authenticated) {
                next('/LoginPage')
            } else {
                next()
            }
        },
    },
    ]

    const router = createRouter({
    history: createWebHistory(),
    routes,
    })

export default router

