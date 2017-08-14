<template>
    <div class="detailtitle">
        <news-title :title="title"></news-title>
        <div class="mui-card">
            <div class="mui-card-header">{{message.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间：{{message.add_time | formatDate('YYYY-MM-DD')}}</span>
                <span>浏览数：{{message.click}}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="message.content" id="detail_news_content">
                </div>
            </div>
    
        </div>
    </div>
</template>

<style>
#detail_news_content p{
    color:#000;
    font-size: 18px;
}
</style>
    
 <script>

import newsTitleVue from './title.vue';

export default {
    data() {
        return {
            message: {},
            title: "详情"
        }
    },
    methods: {
        getDetail() {
            this.$http.get("http://139.199.192.48:8888/api/getnew/" + this.$route.params.id).then(req => {
                req.body.status == 0 && (this.message = req.body.message[0]);
            })
        }
    },
    created() {
        this.getDetail()
    },
    components: {
        "news-title": newsTitleVue
    }

}
</script>
 