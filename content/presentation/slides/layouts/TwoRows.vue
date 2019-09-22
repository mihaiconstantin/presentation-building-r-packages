<template>
    <section class="two-row-layout template">
        <!-- Pins. -->
        <pins :bottom-left="!fragment" :bottom-right="!fragment"></pins>

        <!-- Top row. -->
        <div class="b canvas shadow-md canvas-top-row">
            <!-- Title. -->
            <h3 class="p title ribbon ribbon-left">{{ title }}</h3>

            <!-- Content. -->
            <div class="p content content-top-row">
                <slot name="top">Top row content here.</slot>
            </div>
        </div>

        <!-- Bottom row. -->
        <div class="b canvas shadow-md canvas-bottom-row" :class="[{ fragment: fragment }, bottomFragment ]">
            <!-- Content. -->
            <div class="p content content-bottom-row">
                <slot name="bottom">Bottom content here.</slot>
            </div>
        </div>
    </section>
</template>



<script>
    module.exports = {
        name: 'two-row-layout',

        components: {
            'pins': httpVueLoader('../decorations/Pins.vue'),
        },

        props: {
            title: {
                default: "Two-row layout",
                type: String
            },

            fragment: {
                default: false,
                type: Boolean
            },

            bottomFragment: {
                default: "fade-up",
                type: String
            }
        }
    }
</script>



<style scoped>
    .canvas-bottom-row {
        margin-top: 1.5rem;
    }
</style>
