<template>
    <div>
        <top-nav></top-nav>
            <div class="container">
                <div  class="section">
                    <router-view></router-view>
                </div>
            </div>
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

</style>