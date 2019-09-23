<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>using <code>VS Code</code> commit all changes you have made so far</li>
                <li>go to <code>GitHub</code> and create a repository called <code>footstrap</code></li>
                <li>read section <code>...or push an existing repository from the command line</code></li>
                <li>open the <code>terminal</code> in <code>VS Code</code> and run the commands</li>
                <li>refresh the <code>GitHub</code> page and check that you see your package</li>
            </ol>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 1.7; --origin: top right">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "github",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Publish the package",

                img: { src: "content/presentation/assets/img/github.png", alt: "Github repository" }
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
