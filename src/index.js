import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);

let app = new Vue({
    router: new VueRouter({routes}),
    render: createElement => createElement(App),
}).$mount('#app');
