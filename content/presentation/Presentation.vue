<template>
    <div id="presentation" class="reveal">
        <!-- Header. -->

        <div class="slides">
            <!-- Title slide. -->

            <!-- Outline. -->

            <!-- Slides -->
            <section class="title">HTML slide</section>
            <slide></slide>
        </div>

        <!-- Footer. -->
    </div>
</template>



<script>
    module.exports = {
        name: "presentation",


        components: {
            slide: httpVueLoader('./slides/Slide.vue')
        },


        mounted() {
            this.$nextTick(function() {
                this.$store.dispatch('setReady', true);
            });
        }
    };
</script>



<style scoped>
    .title {
        background-color: rgba(0, 0, 0, 0.30);
        /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
        /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
    }

</style>
