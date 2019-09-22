<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index">{{ item }}</li>
                <li><code>C:\Rtools\bin</code> neeeds to be added to the <code>PATH</code></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="logo" class="shadow-sm tool-logo" alt="R tools logo">
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
                title: "R tools",

                logo: "content/presentation/assets/img/rtools_logo.png",

                items: [
                    "needed for building the package",
                    "needed to check the package before submitting to CRAN"
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
</style>
