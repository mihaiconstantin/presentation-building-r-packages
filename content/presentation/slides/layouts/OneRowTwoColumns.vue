<template>
    <section class="one-row-two-column-layout template">
        <!-- Pins. -->
        <pins :bottom-left="!fragment" :bottom-right="!fragment"></pins>

        <!-- Row. -->
        <div class="canvas shadow-md canvas-row">
            <!-- Title. -->
            <h3 class="title ribbon ribbon-left">{{ title }}</h3>

            <!-- Content. -->
            <div class="content content-row">
                <slot name="row">Row content here.</slot>
            </div>
        </div>

        <!-- Wrapper for the columns. -->
        <div class="layout-wrapper">
            <!-- First column. -->
            <div class="canvas shadow-md canvas-left" :class="{ fragment: fragment }">
                <!-- Content. -->
                <div class="content content-left">
                    <slot name="left">Left column content here.</slot>
                </div>
            </div>

            <!-- Second column. -->
            <div class="canvas shadow-md canvas-right" :class="{ fragment: fragment }">
                <!-- Content. -->
                <div class="content content-right">
                    <slot name="right">Right column content here.</slot>
                </div>
            </div>

        </div>
    </section>
</template>



<script>
    module.exports = {
        name: 'one-row-two-column-layout',

        components: {
            'pins': httpVueLoader('../decorations/Pins.vue'),
        },

        props: {
            title: {
                default: "One-row-two-column layout",
                type: String
            },

            fragment: {
                default: false,
                type: Boolean
            }
        }
    }
</script>



<style scoped>
    .canvas-row {
        margin-bottom: 1.5rem;
    }

    .layout-wrapper {
        display: flex;
    }

    .layout-wrapper > .canvas {
        flex: 1;
    }

    .layout-wrapper > .canvas-left {
        margin-right: .75rem;
    }

    .layout-wrapper > .canvas-right {
        margin-left: .75rem;
    }
</style>
