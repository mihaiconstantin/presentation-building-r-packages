<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li>most of the fields are self-explanatory</li>
                <li class="fragment" data-fragment-index="1">important fields related to the depdendencies:</li>
                <ul>
                    <li class="fragment" data-fragment-index="2"><code>Imports</code>
                        <span class="fragment recommendation" data-fragment-index="5"> &rarr; should be the prefered option</span>
                    </li>
                    <li class="fragment" data-fragment-index="3"><code>Suggests</code></li>
                    <li class="fragment" data-fragment-index="4"><code>Depends</code></li>
                    <li class="fragment" data-fragment-index="6"><code>Collate</code>
                        <span class="recommendation"> &rarr; <a href="https://cran.r-project.org/web/packages/roxygen2/vignettes/collate.html">useful resource</a></span>
                    </li>
                </ul>
                <li class="fragment" data-fragment-index="7">for all other fields, you can an <a href="https://r-pkgs.org/description.html">introduction here</a></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Description file" class="img-zoom" style="--factor: 2; --origin: top right">
        </div>

        <!-- Additional content. -->
        <div slot="additional" class="slot-content-additional">
            <p>The <code>Imports</code> field will be added automatically by <code>devtools</code> if we specify <code>@import</code> statments in our code.</p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "description",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "DESCRIPTION file",

                img: "content/presentation/assets/img/description.png"
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

    .slot-content-left ul ul li:first-of-type {
        margin-top: 1.5rem;
    }

    .slot-content-left ul ul li:last-of-type {
        margin-bottom: 1.5rem;
    }
</style>
