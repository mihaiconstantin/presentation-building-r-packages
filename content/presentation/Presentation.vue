<template>
    <div id="presentation" class="reveal">
        <!-- Header. -->
        <!-- To be added if needed. -->

        <div class="slides">
            <!-- Title slide. -->
            <introduction></introduction>

            <!-- Motivation. -->
            <motivation></motivation>

            <!-- Outline. -->
            <outline></outline>

            <!-- Slides -->

            <!-- Overview of the toolchain. -->
            <tools></tools>

            <!-- Installation check. -->
            <installation></installation>

            <!-- Skeleton of an R package. -->
            <anatomy></anatomy>

            <!-- Example of an workflow. -->
            <workflow></workflow>

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
            'introduction': httpVueLoader('./slides/Introduction.vue'),
            'motivation': httpVueLoader('./slides/Motivation.vue'),
            'outline': httpVueLoader('./slides/Outline.vue'),
            'tools': httpVueLoader('./slides/Tools.vue'),
            'installation': httpVueLoader('./slides/Installation.vue'),
            'anatomy': httpVueLoader('./slides/Anatomy.vue'),
            'workflow': httpVueLoader('./slides/Workflow.vue')
        },

        mounted() {
            this.$nextTick(function() {
                this.$store.dispatch('setReady', true);
            });
        }
    };
</script>



<style></style>
