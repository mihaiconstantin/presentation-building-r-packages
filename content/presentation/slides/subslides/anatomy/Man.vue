<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index" :class="{ fragment: index > 0 }" v-html="item"></li>
                <li class="fragment">you can find a good <a href="https://r-pkgs.org/man.html">introduction to <code>man/</code> here</a></li>
                <li class="fragment">we will get back to using <code>roxygen2</code> later on</li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Man folder" class="img-zoom" style="--factor: 1.5; --origin: top right">
        </div>

        <!-- Additional content. -->
        <div slot="additional" class="slot-content-additional">
            <p>
                The <code>roxygen2</code> package allows us to document functions in the same file where they are defined. 
                It uses special tags such as <code>#' @import ...</code>, <code>#' @param ...</code> etc. 
                See <a href="http://r-pkgs.had.co.nz/man.html">this resource</a> for an overiew.
            </p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "man",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "man/ folder",

                img: "content/presentation/assets/img/man.png",

                items: [
                    "contains all the <code>.Rd</code> docuemntation files",
                    "<code>.Rd</code> files are written in <code>LaTeX</code>",
                    "every object exported should be documented",
                    "when using <code>roxygen2</code> <code>.Rd</code> are generated automatically"
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
