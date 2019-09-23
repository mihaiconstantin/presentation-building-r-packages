<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>open <code>RStudio</code> and change the working directory</li>
                <li>load <code>devtools</code> via <code>library(devtools)</code></li>
                <li>create <code>footstrap</code> package via <code>create("foostrap")</code></li>
                <li>switch to the new <code>RStudio</code> session opened by default</li>
            </ol>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2; --origin: bottom right">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "create-package",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Generating the package files",

                img: { src: "content/presentation/assets/img/generating_package.png", alt: "Generating package" }
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
