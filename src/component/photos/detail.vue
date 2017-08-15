<template>
    <div class="photos_detail">
        <news-title></news-title>
    
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>{{info.title}}</h4>
                <p>
                    添加时间：{{info.add_time|formatDate("YYYY-MM-DD")}}
                    {{info.click}}次点击

                </p>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="mui-content">
    
                        <div class="mui-row">
                            <div class="mui-col-sm-3 mui-col-xs-4" v-for="(item,i) in list" :key="i">
                                <li class="mui-table-view-cell">
                                    <img :src="'http://ofv795nmp.bkt.clouddn.com/'+item.src">
                                </li>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
            <div class="mui-card-footer" v-html="info.content"></div>
        </div>
    </div>
</template>

<style scoped>
.photos_detail li {
    list-style: none;
}

.photos_detail img {
    width: 100%;
}

.mui-card-header {
    display: block
}
</style>
    
 <script>

import newsTitleVue from '../common/title.vue';
import config from '../../js/config.js';

export default {
    data() {
        return {
            list: [],
            info:{},
        }
    },
    methods: {
        getHumImg() {
            const url = config.getHumImg + this.$route.params.id;
            this.$http.get(url).then(rep => {
                if (rep.body.status == 0) {
                    this.list = rep.body.message;
                }
            })
        },
        getImgInfo(){
            const url = config.getImgInfo + this.$route.params.id;
            console.log(url)
            this.$http.get(url).then(rep => {
                if (rep.body.status == 0) {
                    this.info = rep.body.message[0];
                    console.log(this.info)
                }
            })
        }
    },
    created() {
        this.getHumImg();
        this.getImgInfo()
    },
    components: {
        "news-title": newsTitleVue
    }
}
</script>
 