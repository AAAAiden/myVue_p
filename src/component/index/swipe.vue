
<template>
    <section class="swipe">
        <mt-swipe :auto="4000">
    
            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <a :href="item.url">
                    <img :src="item.img" width="100%">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<style>
    .swipe{
        height: 200px
    }
    
</style>
 
 <script>
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getList() {
            this.$http.get("http://139.199.192.48:8888/api/getlunbo").then(req=>{
                if (req.status == 200) {
                    this.list = req.body.message;
                    console.log(this.list);
                }
            })
        }
    },
    created() {
        this.getList();
    }
};
</script>
 