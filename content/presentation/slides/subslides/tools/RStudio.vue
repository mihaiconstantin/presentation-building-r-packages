<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <h4>A bit clumsy, but...</h4>

            <ul>
                <li>has convinent shortcuts around the <code><a href="https://cran.r-project.org/web/packages/devtools/index.html">devtools</a></code> package</li>
                <li v-for="(item, index) in items" :key="index" v-html="item"></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="logo" class="shadow-sm tool-logo" alt="RStudio logo">
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
                title: "`RStudio` for shortcuts",

                logo: "content/presentation/assets/img/rstudio_logo.png",

                items: [
                    "growing ecosystem (e.g., <code>rstudio::conf</code>)"
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
        width: 200px;
        margin: 0;
    }

    code {
        font-weight: bold;
    }
</style>
