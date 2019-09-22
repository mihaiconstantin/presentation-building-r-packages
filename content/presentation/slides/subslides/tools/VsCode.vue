<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index" v-html="item"></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="logo" class="shadow-sm tool-logo" alt="VS Code logo">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "r",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "VS Code",

                logo: "content/presentation/assets/img/vscode_logo.png",

                items: [
                    "open-source lightweight code editor",
                    "large number of extensions (i.e., including <code>R</code>)",
                    "wide language support, e.g., <code>C++</code>, <code>LaTeX</code>, <code>Python</code> etc.",
                    "good for productivity"
                ]
            }
        }
    }
</script>



<style scoped>
    /* Force different alignment from template. */
    .layout-wrapper .content-right {
        align-items: center;
        justify-content: center;
    }

    .layout-wrapper .canvas-right {
        flex: 0 0 25% !important;
    }

    .slot-content-right .tool-logo {
        width: 210px;
        margin: 0;
    }
</style>
