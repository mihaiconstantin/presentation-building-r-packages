<template>
    <div id="presentation" class="reveal">
        <!-- Header. -->
        <!-- To be added if needed. -->

        <div class="slides">
            <!-- Title slide. -->
            <introduction></introduction>

            <!-- Motivation. -->

            <!-- Outline. -->

            <!-- Slides -->

            <!-- Overview of the toolchain. -->

            <!-- Skeleton of an R package. -->

            <!-- Example of an workflow. -->

            <!-- Getting our hands dirty. -->

            <!-- Resources. -->
        </div>

        <!-- Footer. -->
        <presentation-footer></presentation-footer>
    </div>
</template>



<script>
    module.exports = {
        name: "presentation",

        components: {
            'presentation-footer': httpVueLoader('./slides/decorations/Footer.vue'),
            'introduction': httpVueLoader('./slides/Introduction.vue')
        },

        mounted() {
            this.$nextTick(function() {
                this.$store.dispatch('setReady', true);
            });
        }
    };
</script>



<style></style>
