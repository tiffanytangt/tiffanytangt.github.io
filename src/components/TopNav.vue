<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="is-size-3 button is-primary has-text-weight-light" href="/">tiffanytang $ ></a>
            <!-- navbar items, navbar burger... -->
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <!--<a class="navbar-item">Home</a>-->
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="button is-github" target="_blank"
                               onclick="ga('send', 'event', 'Outbound Link', 'click', 'github')"
                               href="http://www.github.com/tiffanytangt">
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
        </div>
    </nav>
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