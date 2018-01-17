<template>
    <div>
        <top-nav></top-nav>
        <section class="section">
            <div class="container">
                <p class="has-text-centered is-italic">I'm workin' on it</p>
            </div>
        </section>
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