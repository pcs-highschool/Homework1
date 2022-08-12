import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Axios from 'axios'
import Getdata from './pages/getData.vue'
import userList from './pages/user-list.vue'
import userProfile from './pages/user-profile.vue'

const routes = [
    { name: 'home', path: '/', component: Getdata},
    { name: 'user-list', path: '/user', component: userList,
    // children : [
    //     { name: 'userProfile', path: '/user/:userId?', component: userProfile },
    // ]
    },
    {  name: 'userProfile', path: '/user/:userId?', component: userProfile },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = Axios;