<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>back in <code>RStudio</code> load <code>devtools</code> if needed</li>
                <li>generate <code>.Rd</code> files in the <code>man/</code> folder with <code>document()</code></li>
                <li>check that <code>man/</code> folder and the function output for errors</li>
                <li>load all files with <code>load_all(".")</code></li>
                <li>run <code>?get.bootstrap</code> and <code>??footstrap</code> to inspect</li>
            </ol>

            <div class="aside fragment">
                <hr class="hr-stretch">
                <p>If the documentation opens in <code>RStuido</code> then everything went perfect.</p>
                <p>You may also run <code>check()</code> again.</p>
            </div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 1.5; --origin: bottom right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            Instead of using <code>document()</code> you can also use the <code>RStudio</code> button under the <code>Build</code> tab,
            as indicated in the picture above.
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "document",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Generate `.Rd` documentation files",

                img: { src: "content/presentation/assets/img/document.png", alt: "Document objects" }
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
