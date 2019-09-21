<template>
    <section class="two-column-layout template">
        <div class="layout-wrapper">

            <!-- Pins. -->
            <pins :top-right="!fragment" :bottom-right="!fragment"></pins>

            <!-- First column. -->
            <div class="canvas shadow-md">
                <!-- Title. -->
                <h3 class="title ribbon ribbon-left">{{ title }}</h3>

                <!-- Content. -->
                <div class="content content-left">
                    <slot name="left">Left column content here.</slot>
                </div>
            </div>

            <!-- Second column. -->
            <div class="canvas shadow-md" :class="{ fragment: fragment }">
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
            }
        }
    }
</script>



<style scoped>
    .layout-wrapper {
        display: flex;
    }

    .layout-wrapper > .canvas {
        flex: 1;
    }

    .layout-wrapper > .canvas:first-of-type {
        margin-right: .75rem;
    }

    .layout-wrapper > .canvas:last-of-type {
        margin-left: .75rem;
    }
</style>
