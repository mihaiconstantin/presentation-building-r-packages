<template>
    <section class="one-column-layout template">
        <div class="b canvas shadow-md">
            <!-- Pins. -->
            <pins></pins>

            <!-- Title. -->
            <h3 class="p title ribbon ribbon-left">{{ title }}</h3>

            <!-- Content. -->
            <div class="p content">
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
        align-items: flex-start;
    }

    .content {
        flex: 1;
        align-self: stretch;
        display: flex;
        flex-flow: column;
    }
</style>
