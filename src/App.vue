<template>
    <div>
        <top-nav></top-nav>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>

<script>
    import TopNav from './components/TopNav.vue'
    import Foot from './components/Foot.vue'

    export default {
        components: {
            TopNav, Foot
        },
        methods: {
        },

        mounted() {
        }
    }
</script>

<style lang="scss">
    @import "main";

    body {
        //background: $black-ter;
        min-height: 100vh;
    }

</style>