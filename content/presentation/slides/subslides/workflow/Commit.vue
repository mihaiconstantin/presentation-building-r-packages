<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>switch back to <code>VS Code</code></li>
                <li>stage the two files <code>get_lm.R</code> and <code>get_bootstrap.R</code></li>
                <li>decide on a commit message and commit the changes</li>
            </ol>

            <div class="aside fragment">
                <hr class="hr-stretch">
                <p>In general it is a good idea to commit each function separately.</p>
                <p>The smaller the commits the easier it is to roll back.</p>
            </div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2.3; --origin: bottom right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            In order to commit, you can either use the <code>terminal</code> or the easy-to-use <code>git</code> panel as show in the image above. 
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "commit",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Commit the changes",

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
