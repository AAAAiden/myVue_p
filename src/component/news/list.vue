<template>
    <div class="news_list">
        <news-title :title="title"></news-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,i) in list" :key="i">
                <router-link :to="'/news/detail/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
.news_list {
    margin-bottom: 50px;
}
</style>
    
 <script>

import newsTitleVue from '../common/title.vue';
import config from '../../js/config.js';

export default {
    data() {
        return {
            list: [],
            title:"新闻列表"
        }
    },
    methods: {
        getNewsList() {
            let url = config.newsList;
            this.$http.get(url).then(req => {
                var data = JSON.parse(req.bodyText);
                if (data.status == 0) {
                    console.log(data.message)
                    this.list = data.message;

                }
            })
        }
    },
    created() {
        this.getNewsList();
    },
    components:{
        "news-title":newsTitleVue
    }
}
</script>
 