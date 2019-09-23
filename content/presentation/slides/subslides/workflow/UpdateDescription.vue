<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>in <code>RStudio</code> run <code>use_mit_license("Your Name")</code></li>
                <li>open <code>DESCRIPTION</code> file in <code>VS Code</code></li>
                <li>update all other fields acordingly</li>
                <li>stage and commit the changes so far</li>
            </ol>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2.3; --origin: bottom right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            If <code>use_mit_license()</code> is not found, you first need to load <code>devtools</code> as <code>library(devtools)</code>.
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "update-description",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Update description",

                img: { src: "content/presentation/assets/img/update_description.png", alt: "Updated description" }
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
