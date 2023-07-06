import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/pages/Login.vue'
import Register from './components/pages/Register.vue'
import PicUpload from "./components/widgts/picUpload.vue";
import PicResultShow from "./components/widgts/picResultShow.vue";
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }]
/*    {
        path: '/picUpload',
        name: 'PicUpload',
        component: PicUpload
    },
    {
        path: '/picResultShow',
        name: 'PicResult Show',
        component: PicResultShow
    }
]*/

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router