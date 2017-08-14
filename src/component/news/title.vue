<template>
    <div class="newstitle">
        <header class="mint-header" id="changecolor">
            <div class="mint-header-button is-left" @click="rollback">
                <button class="mint-button mint-button--default mint-button--normal">
                    <label class="mint-button-text">返回</label>
                </button>
            </div>
            <h1 class="mint-header-title">{{title}}</h1>
            <div class="mint-header-button is-right"></div>
        </header>
    </div>
</template>

<style>
#changecolor {
    background-color: #eee;
    color: blue
}
</style>
    
 <script>
export default {
    props: ['title'],
    data() {
        return {

        }
    },
    methods: {
        // 返回上一页
        rollback() {
            this.$router.go(-1);
        }
    }


}
</script>
 