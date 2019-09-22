<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <h4>Important files and folders:</h4>
            <ul>
                <li v-for="(item, index) in items" :key="index" v-html="item"></li>
            </ul>

            <hr class="hr-stretch">

            <h4>Additional files and folders:</h4>
            <ul>
                <li v-for="(item, index) in additionalItems" :key="index" v-html="item"></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Git check" class="img-zoom" style="--factor: 1.5">

            <div class="additional-information">
                <h4>Good to know:</h4>
                <ul>
                    <li>now it is a good time to locate the package folder and open it in <code>VS Code</code> or <code>RStudio</code></li>
                    <li>we will generate the additional files and folders as we progress trough the workshop</li>
                </ul>
            </div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "folder-structure",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Main folders and files",

                img: "content/presentation/assets/img/folder_structure.png",

                items: [
                    "<code>DESCRIPTION</code>",
                    "<code>NAMESPACE</code>",
                    "<code>R/</code>"
                ],

                additionalItems: [
                    "<code>man/</code>",
                    "<code>tests/</code>",
                    "<code>NEWS</code>",
                    "<code>README.md</code>",
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

    .content-right {
        justify-content: center;
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

    ul {
        margin-left: 3.5rem;
    }

    img {
        width: 100%;
    }
</style>
