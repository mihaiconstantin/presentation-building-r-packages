<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>load again <code>devtools</code> via <code>library(devtools)</code></li>
                <li>initialize repository by running <code>use_git() function</code></li>
                <li>accept both prompts issues by <code>use_git()</code></li>
            </ol>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 1.6; --origin: bottom right">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "initialize-repository",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Initialize `Git` repository",

                img: { src: "content/presentation/assets/img/initialize_repository.png", alt: "Initialize repository" }
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 2 !important;
    }

    .content-right {
        justify-content: center;
    }
</style>
