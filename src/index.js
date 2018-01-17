import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

let app = new Vue({
    el: '#app',
    render: createElement => createElement(App),
});
