import Vue from './vendor/vue.esm.browser.js';
import VueRouter from './vendor/vue-router.esm.browser.js'
import Vuex from './vendor/vuex.esm.browser.js'

import {HomePageComponent} from "./components/pages/home-page-component.js";
import {AboutPageComponent} from "./components/pages/about-page-component.js";

import {Navbar} from './components/navbar.js';

Vue.use (VueRouter);
Vue.use (Vuex);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePageComponent,
            name: "Home Page"
        },
        {
            path: '/about',
            component: AboutPageComponent,
            name: "About Us Page"
        }]
});

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        incrementBy: (state, n) => state.counter += n
    }
});


new Vue({
    el: '#app', // This should be the same as your <div id=""> from earlier.
    components: {
        Navbar
    },
    router,
    store,
    template:
        `
            <div>
            <navbar></navbar>
            <hr/>
            <router-view></router-view>
            </div>
        `
});



/***
 * VueJS production: https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js
 * VueJS development: https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.js
 * Vue-Router production: https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.1.3/vue-router.esm.browser.min.js
 * Vue-Router development: https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.js
 * VueX production: https://cdnjs.cloudflare.com/ajax/libs/vuex/3.1.2/vuex.esm.browser.min.js
 * VueX development: https://cdnjs.cloudflare.com/ajax/libs/vuex/3.1.2/vuex.esm.browser.js
 */

