<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index" :class="{ fragment: index > 0 }" v-html="item"></li>
                <li class="fragment">you can find a good <a href="https://r-pkgs.org/tests.html">introduction to testing in <code>R</code> here</a></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Tests folder" class="img-zoom" style="--factor: 2.5; --origin: top right">
        </div>

        <!-- Additional content. -->
        <div slot="additional" class="slot-content-additional">
            <p>
                <code>unit testing</code> can be especially useful when you work on a large package with several other contributors.
                Writing tests is an optional step. You are not required to write any tests in order to submit your package to <code>CRAN</code>.
                They may require specialized knowledge and terminology.
            </p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "tests",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "tests/ folder",

                img: "content/presentation/assets/img/tests.png",

                items: [
                    "contains automated tests called <code>unit tests</code>",
                    "meant to run after you modify the code of your package",
                    "robust way to prevent accidental bugs",
                    "the <code>tests</code> folder is not included by default",
                    "it can be generated via <code>devtools::use_testthat()</code>"
                ]
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 1.5 !important;
    }
</style>
