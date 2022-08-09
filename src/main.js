import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/home-home.vue'
import About from './pages/about-about.vue'
import Board from './pages/board-board.vue'
import Show from './pages/show-show.vue'
import Contact from './pages/contact-contact.vue'
import Detail from './pages/detail-detail.vue'

const routes = [
    { name: 'home', path: '/', component: Home},
    { name: 'about', path: '/about', component: About},
    { name: 'board', path: '/board', component: Board},
    { name: 'show', path: '/board/show', component: Show},
    { name: 'contact', path: '/contact', component: Contact},
    { name: 'detailPage', path: '/detail', component: Detail}

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$musicList = [
    {
        img : 'http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/317/324/81317324_1574840054925_1_600x600.JPG',
        title: "러브미 (Love me) (feat. Hoody)",
        singer: "나플라 (nafla)",
    },
    {
        img : 'https://w.namu.la/s/1a5c5322202d72f1f8859f06027e17bfccd56d5517e15563f9d67cadbb6ccbd1e871070e022602e9f2597df880f2fde12b38c56a9c4a68a82180014c27017244fbfb26fee9229b75799c6e14e8c821c8c617345d1661b6934cd77abc5d3ebd0c0259c3df213f0b66dc1647c320866fae',
        title: "긴 밤 (feat. 기리보이)",
        singer: "Seori",
    },
    {
        img : 'http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/159/935/81159935_1550130234883_1_600x600.JPG',
        title: "오롯이",
        singer: "헤이즈 (Heize)",
    },
    {
        img : 'https://i1.sndcdn.com/artworks-000257429273-hupqn0-t500x500.jpg',
        title: "Boat",
        singer: "죠지",
    },
    {
        img : 'https://image.bugsm.co.kr/album/images/500/204175/20417524.jpg',
        title: "안전지대",
        singer: "이하이",
    },
    {
        img: 'https://image.bugsm.co.kr/album/images/500/9955/995589.jpg',
        title: "MOVIE",
        singer: "JUNNY (주니)",
    },
    {
        img: 'https://image.bugsm.co.kr/album/images/500/5066/506686.jpg',
        title: "와리가리",
        singer: "혁오 (HYUKOH)",
    },
]
