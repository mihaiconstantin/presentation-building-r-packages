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
            <workflow-first-part></workflow-first-part>

            <!-- First code example. -->
            <code-example-first></code-example-first>

            <!-- Continuing the workflow. -->
            <workflow-second-part></workflow-second-part>

            <!-- First code example. -->
            <code-example-second></code-example-second>

            <!-- Final part of the workflow. -->
            <workflow-final-part></workflow-final-part>

            <!-- Resources. -->
            <resources></resources>

            <!-- The end. -->
            <the-end></the-end>
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
            'workflow-first-part': httpVueLoader('./slides/WorkflowFirstPart.vue'),
            'code-example-first': httpVueLoader('./slides/CodeExampleFirst.vue'),
            'workflow-second-part': httpVueLoader('./slides/WorkflowSecondPart.vue'),
            'code-example-second': httpVueLoader('./slides/CodeExampleSecond.vue'),
            'workflow-final-part': httpVueLoader('./slides/WorkflowFinalPart.vue'),
            'resources': httpVueLoader('./slides/Resources.vue'),
            'the-end': httpVueLoader('./slides/TheEnd.vue')
        },

        mounted() {
            this.$nextTick(function() {
                this.$store.dispatch('setReady', true);
            });
        }
    };
</script>



<style></style>
