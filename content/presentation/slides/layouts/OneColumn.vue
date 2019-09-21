<template>
    <section class="one-column-layout template">
        <div class="canvas shadow-md">
            <!-- Pins. -->
            <pins></pins>

            <!-- Title. -->
            <h3 class="title ribbon ribbon-left">{{ title }}</h3>

            <!-- Content. -->
            <div class="content">
                <slot>Wide content here.</slot>
            </div>
        </div>
    </section>
</template>



<script>
    module.exports = {
        name: 'one-column-layout',

        components: {
            'pins': httpVueLoader('../decorations/Pins.vue'),
        },

        props: {
            title: {
                default: "One-column layout",
                type: String
            }
        }
    }
</script>



<style scoped>
    .canvas {
        display: flex;
        flex-flow: column;
    }

    .content {
        flex: 1;
        display: flex;
        flex-flow: column;
    }
</style>
