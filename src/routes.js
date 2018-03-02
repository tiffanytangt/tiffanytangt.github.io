import Construction from './components/Construction.vue'
import Contact from './components/Contact.vue'
import TechPage from './components/TechPage.vue'
import About from './components/About.vue'

const routes =  [
    { path: '/', redirect: '/about' },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/projects', component: Construction },
    { path: '/tech', component: TechPage }
];

export default routes;