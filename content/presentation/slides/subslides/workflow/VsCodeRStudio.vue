<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>right-click on the package folder and select <code>Open with Code</code></li>
                <li>you may also open <code>VS Code</code> and select the folder via <code>File &rarr; Open Folder...</code></li>
            </ol>

            <div class="aside fragment">
                <hr class="hr-stretch">
                <p>At this point we are ready to start writing the first function of the <code>footstrap</code> package.</p>
                <p>Before we start, Giuseppe will tell us more about the scope of the <code>footstrap</code> package.</p>
            </div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2; --origin: bottom right">
        </div>

        <!-- Additional -->
        <div slot="additional" class="slot-content-additional">
            We use <code>VS Code</code> to write the package code (i.e., functions) and 
            <code>RStudio</code> to load, test, check and install the package. 
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "vscode-rstudio",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Using VS Code",

                img: { src: "content/presentation/assets/img/vscode_open_package.png", alt: "Open in VS Code" }
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

    .slot-content-left p {
        margin: 0;
    }

    .slot-content-left p:first-of-type {
        margin-bottom: 1.5rem;
    }

    .aside {
        font-size: 1rem;
    }
</style>
