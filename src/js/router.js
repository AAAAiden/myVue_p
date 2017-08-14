import VueRouter from 'vue-router';

import indexCom from '../component/index/index.vue';
import newsListCom from '../component/news/list.vue';
import newsDetailCom from '../component/news/detail.vue';

// 配置路由
export default new VueRouter({
    routes: [
        { path: "/", redirect: "/index" },
        { path: "/index", component:indexCom},
        { path: "/news/list", component:newsListCom},
        { path: "/news/detail/:id", component:newsDetailCom},
    ]
})