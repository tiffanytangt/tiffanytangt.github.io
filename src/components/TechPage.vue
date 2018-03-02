<template>
    <div>
        <section class="hero is-dark is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Experience</h1>
                    <h2 class="subtitle">Here are some things I've dabbled with:</h2>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="section tags">
                <a :class="['tag', 'is-primary', {'is-info': selectedTags.includes(tag)}]"
                   v-on:click="toggleTag(tag)"
                   v-for="tag in availableTags"><span>{{tag}}</span></a>
            </div>
            <div class="section">
                <transition-group name="tile" class="columns is-multiline">
                    <div class="column is-one-fifth-desktop is-one-quarter-tablet "
                         v-for="logo in filteredLogos"
                         :key="logo.label">
                        <figure class="logo button image">
                            <img :src=getLogo(logo.path)>
                            <div class="logo-overlay"><div class="overlay-text">{{logo.label}}</div></div>
                        </figure>
                    </div>
                </transition-group>
            </div>
        </section>
    </div>

</template>

<script>
    import 'lodash';
    import logos from '../../images/images'

    export default {
        data() {
            return {
                selectedTags: [],
                logos: logos
            }
        },
        computed: {
            availableTags: function() {
                let allTags = [].concat.apply([],this.logos.map(o => o.tags));
                allTags = _.uniq(allTags);
                return allTags;
            },
            filteredLogos : function() {
                if (this.selectedTags.length > 0) {
                    return this.logos.filter(logo => {
                        let matches = logo.tags.filter(tag => this.selectedTags.includes(tag));
                        return matches.length > 0;
                    });
                }
                return this.logos;
            }
        },
        methods: {
            getLogo: filename => `assets/${filename}`,
            toggleTag: function(tag) {
                let idx = this.selectedTags.indexOf(tag);
                if (idx >= 0) {
                    this.selectedTags.splice(idx,1);
                } else {
                    this.selectedTags.push(tag);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../main';
    $logo-size: 150px;
    $hover-speed: .15s;
    .logo {
        position: relative;
        padding: 45px;
        background: $dark;

        &:active {
            padding: 55px;

        }
    }
    .logo-overlay {
        cursor: default;
        position: absolute;
        top:0;
        left: 0;
        bottom: 0;
        background: rgba(255, 255, 255, .6);
        color: $dark;
        font-size: 24px;
        font-weight: 600;
        width:$logo-size;
        max-width:$logo-size;
        .overlay-text {
            width: $logo-size;
            line-height: $logo-size;
            vertical-align: middle;
        }
        opacity: 0;
        transition: opacity $hover-speed ease-out;
        -moz-transition: opacity $hover-speed ease-out;
        -webkit-transition: opacity $hover-speed ease-out;
        -o-transition: opacity $hover-speed ease-out;

        &:hover {
            opacity: .9;
        }
    }
    .logo.image{
        height: $logo-size;
        width: $logo-size;
    }


    .tile-move {
        transition: transform .7s;
    }
    .tile-leave-active {
        display: none;
    }
    .tile-enter-active {
        transition: opacity .4s;
        opacity: 1;
    }

    .tile-enter, .tile-leave-to {
        transition: opacity .4s;
        opacity: 0;
    }

</style>