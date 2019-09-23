<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>switch to <code>RStudio</code></li>
                <li>run the <code>check()</code> function of <code>devtools</code> to check the package</li>
                <li>carefully read the output of <code>check()</code></li>
            </ol>

            <div class="aside fragment">
                <hr class="hr-stretch">
                <p>To sumbit to <code>CRAN</code> the <code>check()</code> function must return 0 errors and warnings.</p>
                <p>In our case we have warnings related to the <code>DESCRIPTION</code> file. Let's fix them!</p>
            </div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2.3; --origin: bottom right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            If you prefer, you can also use the <code>Check</code> inside <code>RStudio</code> which, in turn, will run <code>devtools::check()</code>.
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "check",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Check the package",

                img: { src: "content/presentation/assets/img/check.png", alt: "Check package" }
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
