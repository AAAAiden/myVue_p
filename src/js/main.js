import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import mintUI from 'mint-ui';
import '../../node_modules/mint-ui/lib/style.css';
import '../../node_modules/mui/dist/css/mui.css';

import '../../node_modules/mui/exanples/css/mui.css';
import '../../node_modules/mui/exanples/css/mui.css';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(mintUI);

import App from '../component/App.vue';

import filter from './filter.js';
import router from './router.js';

new Vue({
    el:"#app",
    render:c=>c(App),
    router
})