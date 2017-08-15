<template>
    <div id="myApp">
        <header-vue></header-vue>
        <router-view></router-view>
        <footer-vue></footer-vue>

    </div>
</template>

<style>
    #myApp {
        margin-top: 40px;
        padding-bottom: 50px;
        
    }
</style>
 
 <script>
 import headerVue from "./home/header.vue";
 import footerVue from "./home/footer.vue";


 export default {
    components:{
        'header-vue':headerVue,
        'footer-vue':footerVue
    }
 }
 </script>
 