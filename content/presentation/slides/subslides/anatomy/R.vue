<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index" :class="{ fragment: index > 0 }" v-html="item"></li>
                <li class="fragment">you can find other good <a href="https://r-pkgs.org/r.html">recommendations here</a></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Tests folder" class="img-zoom" style="--factor: 2; --origin: top right">
        </div>

        <!-- Additional content. -->
        <div slot="additional" class="slot-content-additional">
            <p>
                By default, <code>R</code> loads the files within <code>R/</code> in alphabetical order.
                When that becomes an issue (e.g., many files in <code>R/</code>) you can use the <code>Collation</code> field in <code>DESCRIPTION</code>.
                The <code>roxyge2</code> package provides <code>#' @include ...</code> for manipulating the collation order.
            </p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "r",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "R/ folder",

                img: "content/presentation/assets/img/r.png",

                items: [
                    "all <code>.R</code> script files live in this folder",
                    "it is not allowed to create sub folders",
                    "never use <code>library()</code>, <code>require()</code> or <code>source()</code> in <code>R/</code>",
                    "a good idea is to create an <code>.R</code> file per function",
                    "e.g., <code>bootstrap()</code> will be placed in file <code>bootstrap.R</code>"
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
