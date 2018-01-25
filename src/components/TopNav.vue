<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/">
                <span class="is-size-3 button is-primary has-text-weight-light">tiffanytang $ ></span>
            </router-link>
            <!-- navbar items, navbar burger... -->
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <!--<router-link to="/about" class="navbar-item">About</router-link>-->
                <router-link to="/projects" class="navbar-item">Projects</router-link>
                <router-link to="/tech" class="navbar-item">Experience</router-link>
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
                            <router-link class="button" to="/contact">
                                <span class="icon"><i class=" fa fa-envelope fa-lg"></i></span>
                            </router-link>
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