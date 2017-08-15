<template>
    <div class="photos_list">
        <!--分类-->
        <div class="category">
            <div>
                <span>
                    <router-link to="/photos/list/0">
                        全部
                    </router-link>
                </span>
                <span v-for="(item,i) in category" :key="i">
                    <router-link :to="'/photos/list/'+item.id">
                        {{item.title}}
                    </router-link>
                </span>
            </div>
        </div>
        <!--图片列表-->
        <div class="mui-card" v-for="(item,i) in list" :key="i">
            <router-link :to="'/photos/detail/'+item.id">
                <div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url(http://ofv795nmp.bkt.clouddn.com/'+ item.img_url +')'"></div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p style="color: #333;">{{item.zhaiyao}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style>
/*.category {
    width: 100%;
    overflow: hidden;
}

.category div {
    width: 1000px;
}*/


/*.content li{
    list-style: none;
    height: 300px;
    position: relative
}
.content li p{
    position: absolute;
    bottom: 0;
}
image[lazy=loading] {
    width: 80px;
    height: 300px;
    margin: auto;
}*/
</style>
    
 <script>

import config from '../../js/config.js';

export default {
    data() {
        return {
            list: [],
            category: [],
            title: "图片列表"
        }
    },
    methods: {
        // 获取图片列表
        getPhotosList(index) {
            const url = config.getPhotosList + index;
            this.$http.get(url).then(resp => {
                if (resp.body.status == 0) {
                    this.list = resp.body.message;
                }
            })
        },
        // 获取分类列表
        getImgCategory() {
            const url = config.getImgCategory;
            this.$http.get(url).then(resp => {
                if (resp.body.status == 0) {
                    console.log(resp.body.message)
                    this.category = resp.body.message;
                }
            })
        }
    },
    created() {
        this.getPhotosList(0);
        this.getImgCategory()
    },
    watch: {
        $route() {
            this.getPhotosList(this.$route.params.id)
        }
    }
}
</script>
 