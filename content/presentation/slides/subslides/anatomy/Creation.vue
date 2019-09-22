<template>
    <layout :title="title" :fragment="true">
        <!-- Top row. -->
        <div slot="row" class="slot-content-row">
            <h4>Few words about <code class="highlight">devtools</code>...</h4>
            <ul>
                <li>it is useful to get familiar with its <a href="https://cran.r-project.org/web/packages/devtools/devtools.pdf">documentation</a></li>
                <li v-for="(item, index) in topRowItems" :key="index" v-html="item"></li>
            </ul>
        </div>

        <!-- Left column content. -->
        <div slot="left" class="y slot-content-left">
            <h4>Let's generate an empty package:</h4>
            <ol>
                <li v-for="(item, index) in bottomRowItems" :key="index" v-html="item"></li>
            </ol>

            <hr class="hr-stretch">

            <div class="v additional-information">
                <p class="s">
                    The <code>create()</code> function will generate a folder (e.g., <code>foopkg</code>) where all the packge files are stored. 
                    <br><br>
                    This folder is where we will spend most of our time.
                </p>
            </div>
        </div>

        <!-- Left column content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Package generation" class="img-zoom" style="--origin: bottom right; --factor: 2">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "creation",

        components: {
            'layout': httpVueLoader('../../layouts/OneRowTwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Creating an empty package",

                img: "content/presentation/assets/img/package_generation.png",

                topRowItems: [
                    "can be used to to generate, document, build, test and install a package"
                ],

                bottomRowItems: [
                    "open <code>RStudio</code> and set the working directory",
                    "run <code>library(devtools)</code> in console",
                    "generate a package with <code>create(\"foopkg\")</code>"
                ]
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 1.5 !important;
    }

    .content-right {
        justify-content: center;
    }

    .additional-information p {
        margin: 0;
        font-size: .9rem;
    }

    ul, ol {
        margin-left: 3.5rem;
    }
</style>
