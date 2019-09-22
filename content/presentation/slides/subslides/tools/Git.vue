<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index">{{ item }}</li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="logo" class="shadow-sm tool-logo" alt="Git logo">
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
                title: "Git",

                logo: "content/presentation/assets/img/git_logo.png",

                items: [
                    "used to version control your code",
                    "makes colaborative development as breaze",
                    "useful for keeping track of changes",
                    "makes it easy for others to install your package"
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
