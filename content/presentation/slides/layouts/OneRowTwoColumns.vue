<template>
    <section class="one-row-two-column-layout template">
        <!-- Pins. -->
        <pins :bottom-left="!fragment" :bottom-right="!fragment"></pins>

        <!-- Row. -->
        <div class="b canvas shadow-md canvas-row">
            <!-- Title. -->
            <h3 class="p title ribbon ribbon-left">{{ title }}</h3>

            <!-- Content. -->
            <div class="p content content-row">
                <slot name="row">Row content here.</slot>
            </div>
        </div>

        <!-- Wrapper for the columns. -->
        <div class="g layout-wrapper">
            <!-- First column. -->
            <div class="b canvas shadow-md canvas-left" :class="[{ fragment: fragment }, leftFragment ]">
                <!-- Content. -->
                <div class="p content content-left">
                    <slot name="left">Left column content here.</slot>
                </div>
            </div>

            <!-- Second column. -->
            <div class="b canvas shadow-md canvas-right" :class="[{ fragment: fragment }, rightFragment ]">
                <!-- Content. -->
                <div class="p content content-right">
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
            },

            leftFragment: {
                default: "fade-right",
                type: String
            },

            rightFragment: {
                default: "fade-left",
                type: String
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

    .layout-wrapper .canvas {
        flex: 1;
    }

    .layout-wrapper .canvas-left {
        margin-right: .75rem;
    }

    .layout-wrapper .canvas-right {
        margin-left: .75rem;
    }

    .layout-wrapper .canvas-left,
    .layout-wrapper .canvas-right {
        display: flex;
        flex-flow: column;
    }

    .layout-wrapper .content-left,
    .layout-wrapper .content-right {
        flex: 1;
        display: flex;
        flex-flow: column;
    }
</style>
