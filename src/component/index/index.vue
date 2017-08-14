<template>
    <div class="index">
        <swipe-vue></swipe-vue>
        <nav-vue></nav-vue>
    </div>
</template>

<style>

</style>
 
 <script>
import swipeVue from './swipe.vue';
import navVue from './nav.vue';

export default {
    components: {
        "swipe-vue": swipeVue,
        "nav-vue": navVue
    }

};

</script>
 