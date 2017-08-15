import VueRouter from 'vue-router';

import indexCom from '../component/index/index.vue';
import newsListCom from '../component/news/list.vue';
import newsDetailCom from '../component/news/detail.vue';
import photosListCom from '../component/photos/list.vue';
import photosDetailCom from '../component/photos/detail.vue';
import productListCom from '../component/products/list.vue';

// 配置路由
export default new VueRouter({
    routes: [
        { path: "/", redirect: "/index" },
        { path: "/index", component:indexCom},
        { path: "/news/list", component:newsListCom},
        { path: "/news/detail/:id", component:newsDetailCom},
        { path: "/photos/list/:id", component:photosListCom},
        // 缩略图
        { path: "/photos/detail/:id", component:photosDetailCom},
        { path: "/products/list/:pageIndex", component:productListCom},
    ]
})