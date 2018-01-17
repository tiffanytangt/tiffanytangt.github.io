<template>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>Powered by <a href="https://vuejs.org">Vue</a> and <a href="https://bulma.io/">Bulma</a></p>
                <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <a class="button is-github"
                           onclick="ga('send', 'event', 'Outbound Link', 'click', 'github')"
                           target="_blank" href="http://www.github.com/tiffanytangt">
                            <span class="icon"><i class=" fa fa-github fa-lg"></i></span>
                        </a>
                        <a class="button is-linkedin" target="_blank"
                           onclick="ga('send', 'event', 'Outbound Link', 'click', 'linkedin')"
                           href="https://www.linkedin.com/in/tiffanytangt/">
                            <span class="icon"><i class=" fa fa-linkedin fa-lg"></i></span>
                        </a>
                        <a class="button" href="#" disabled>
                            <span class="icon"><i class=" fa fa-envelope fa-lg"></i></span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

    export default {
        components: {
        },
        methods: {
        },

        mounted() {
        }
    }
</script>

<style lang="scss">


</style>