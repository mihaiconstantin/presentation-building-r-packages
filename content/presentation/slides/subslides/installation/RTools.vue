<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <h4>Steps:</h4>
            <ol>
                <li v-for="(item, index) in steps" :key="index" v-html="item"></li>
            </ol>

            <hr class="hr-stretch">

        <h4>If the function returns <code>FALSE</code>:</h4>
            <ol>
                <li v-for="(item, index) in fixes" :key="index" v-html="item"></li>
            </ol>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Git check">

            <div class="additional-information">
                <h4>Good to know:</h4>
                <ul>
                    <li>sometimes <code>RStudio</code> prompts you to install <code>R Tools</code> from within <code>RStudio</code>; 
                    it is recommended to install it directly for the official <code>R</code> website</li>
                    <li>for more information see <a href="http://jtleek.com/modules/01_DataScientistToolbox/02_10_rtools/#1">this short presentation</a></li>
                </ul>
            </div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "rtools",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "R Tools",

                img: "content/presentation/assets/img/rtools_check.png",

                steps: [
                    "open <code>RStudio Code</code>",
                    "evaluate <code>devtools::find_rtools()</code>",
                ],

                fixes: [
                    "locate the installation folder (e.g., on Windows defaults to <code>C:\\Rtools</code>)",
                    "add <code>C:\\Rtools\\bin</code> to the operating system <code>PATH</code> variable"
                ]
            }
        }
    }
</script>



<style scoped>
    /* Force different alignment from template. */
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
