import Construction from './components/Construction.vue'
import Contact from './components/Contact.vue'
import TechPage from './components/TechPage.vue'

const routes =  [
    { path: '/', component: Construction },
    { path: '/contact', component: Contact },
    { path: '/about', component: Construction },
    { path: '/projects', component: Construction },
    { path: '/tech', component: TechPage }
];

export default routes;