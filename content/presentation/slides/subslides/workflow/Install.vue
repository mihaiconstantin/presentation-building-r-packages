<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>switch to <code>RStudio</code> and load <code>devtools</code> if necessary</li>
                <li>install the package from source with <code>install()</code></li>
                <li>restart the <code>R</code> session (i.e., <code>Session &rarr; Restart R</code>)</li>
                <li>load the package with <code>library(footstrap)</code></li>
                <li>test the package using the code on the previous slide</li>
            </ol>

            <div class="aside fragment">
                <hr class="hr-stretch">
                <p>We have a working package and we are almost ready to share it on <code>GitHub.</code></p>
                <p>Before that, we need to add a <code>README.md</code> file.</p>
            </div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2; --origin: bottom right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            <p>You may also use the <code>Clean and Rebuild</code> option under the <code>Build</code> tab in <code>RStudio</code>
            instead of typing <code>devtools::install()</code>.</p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "install",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Install the package from source",

                img: { src: "content/presentation/assets/img/install.png", alt: "Install package" }
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 2 !important;
    }

    .content-right {
        justify-content: center;
    }

    .slot-content-left p {
        margin: 0;
    }

    .slot-content-left p:first-of-type {
        margin-bottom: 1.5rem;
    }

    .aside {
        font-size: 1rem;
    }
</style>
