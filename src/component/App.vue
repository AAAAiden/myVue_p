<template>
    <div id="myApp">
        <header-vue></header-vue>
        <router-view></router-view>
        <footer-vue></footer-vue>

    </div>
</template>

<style>
    #myApp {
        margin-top: 40px
    }
</style>
 
 <script>
//  主页
 import headerVue from "./home/header.vue";
 import footerVue from "./home/footer.vue";
 import indexVue from "./index/index.vue";
//  新闻


 export default {
    components:{
        'index-Vue':indexVue,
        'header-vue':headerVue,
        'footer-vue':footerVue
    }
 }
 </script>
 