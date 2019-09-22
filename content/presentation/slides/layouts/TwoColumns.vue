<template>
    <section class="two-column-layout template">
        <div class="g layout-wrapper">

            <!-- Pins. -->
            <pins :top-right="!fragment" :bottom-right="!fragment"></pins>

            <!-- First column. -->
            <div class="b canvas shadow-md canvas-left">
                <!-- Title. -->
                <h3 class="p title ribbon ribbon-left">{{ title }}</h3>

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
        name: 'two-column-layout',

        components: {
            'pins': httpVueLoader('../decorations/Pins.vue'),
        },

        props: {
            title: {
                default: "Two-column layout",
                type: String
            },

            fragment: {
                default: false,
                type: Boolean
            },

            rightFragment: {
                default: "fade-up",
                type: String
            }
        }
    }
</script>



<style scoped>
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
        align-items: flex-start;
    }

    .layout-wrapper .content-left,
    .layout-wrapper .content-right {
        flex: 1;
        align-self: stretch;
        display: flex;
        flex-flow: column;
    }
</style>
