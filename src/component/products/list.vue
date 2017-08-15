<template>
    <section class="product_list">
        <div class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list" :key="item.id">
                    <a href="#">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body">{{item.title}}</div>
                        <p class="price">
                            <span class="sell_price">￥{{item.sell_price}} </span>
                            <del class="market_price"> ￥{{item.market_price}}</del>
                        </p>
                        <p>
                            <span class="left">热卖中</span>
                            <span class="right">剩{{item.stock_quantity}}件</span>
                        </p>
                    </a>
                </li>
    
            </ul>
            <div class="mui-slider-indicator" style="position: static;background-color: #fff;">
                <router-link :to="'/products/list/'+(+pageIndex-1)">
                    <span class="mui-action mui-action-previous mui-icon mui-icon-back"></span>
                </router-link>
                <div class="mui-number">
                    <span>第{{pageIndex}}页</span>
                </div>
                <router-link :to="'/products/list/'+(+pageIndex+1)">
                    <span class="mui-action mui-action-next mui-icon mui-icon-forward">
                    </span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<style lang="less">
.product_list {
    .price {
        margin: 10px 0;
        text-align: left;
        .sell_price {
            font-size: 16px;
            color: red;
        }
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
}
</style>
 
 <script>
import config from '../../js/config.js'
export default {
    data() {
        return {
            list: [],
            pageIndex: +this.$route.params.pageIndex,
        }
    },
    methods: {
        getProductList() {
            const url = config.getProductsList + '?pageindex=' + this.$route.params.pageIndex;
            this.$http.get(url).then(rep => {
                if (rep.body.status == 0) {
                    this.list = rep.body.message
                }
            })
        }
    },
    created() {
        this.getProductList()
    },
    watch: {
        $route() {
            this.pageIndex=+this.$route.params.pageIndex;
            this.getProductList()
        }
    }
}
</script>
 