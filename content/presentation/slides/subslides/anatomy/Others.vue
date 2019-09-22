<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li><code>README.md</code><span class="recommendation"> &rarr; package overview and instruction for GitHub repository</span></li>
                <li class="fragment"><code>NEWS</code><span class="recommendation"> &rarr; a form of realese notes for new things added to the package</span></li>
                <li class="fragment"><code>COPYING</code><span class="recommendation"> &rarr; the package legal license</span></li>
                <li class="fragment"><code>.gitignore</code><span class="recommendation"> &rarr; a list of files to be ignored by <code>git</code></span></li>
                <li class="fragment"><code>data/</code><span class="recommendation"> &rarr; a folder to store data associated with the package</span></li>
                <li class="fragment"><code>*</code><span class="recommendation"> &rarr; you may also create your own folders</span></li>
            </ul>
        </div>
<!-- class="fragment" data-fragment-index="2" -->
        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Tests folder" class="img-zoom" style="--factor: 2; --origin: top right">
        </div>

        <!-- Additional content. -->
        <div slot="additional" class="slot-content-additional">
            <p>
                Most of the files and folders mentioned here are optional. 
                However, you should consider each one carefully before submitting the package to <code>CRAN</code>.
            </p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "others",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Other files and folders",

                img: "content/presentation/assets/img/others.png"
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 1.5 !important;
    }

    .slot-content-left .recommendation {
        font-size: .9rem;
    }
</style>
