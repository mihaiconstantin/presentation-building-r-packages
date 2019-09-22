<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <h4>Steps:</h4>
            <ol>
                <li v-for="(item, index) in steps" :key="index" v-html="item"></li>
            </ol>

            <hr class="hr-stretch">

            <h4>If there are errors, try:</h4>
            <ol>
                <li v-for="(item, index) in fixes" :key="index" v-html="item"></li>
            </ol>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Devtools package check">

            <div class="additional-information">
                <h4>Good to know:</h4>
                <ul>
                    <li><code>RStudio</code> will warn you if <code>R</code> is not installed</li>
                    <li>if <code>RStudio</code> prompts you to install <code>devtools</code> from source, politelty decline; otherwise it will take a while...</li>
                </ul>
            </div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "rstudio-r",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "R, RStudio and devtools",

                img: "content/presentation/assets/img/devtools_check.png",

                steps: [
                    "open <code>RStudio</code>",
                    "type <code>library(devtools)</code> in console"
                ],

                fixes: [
                    "<code>remove.packages(\"devtools\")</code>",
                    "<code>install.packages(\"devtools\")</code>"
                ]
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 1.5 !important;
    }

    .slot-content-right {
        flex: 1;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }

    .additional-information {
        font-size: .9rem;
    }

    .additional-information h4 {
        margin-top: 1.5rem;
        margin-bottom: .5rem;
    }

    .additional-information ul li:not(:last-of-type) {
        margin-bottom: .5rem;
    }

    .additional-information ul {
        margin-left: 2.5rem;
    }

    ol {
        margin-left: 3.5rem;
    }
</style>
