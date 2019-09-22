<template>
    <div class="pins">
        <i v-if="topLeft" class="pin pin-top-left"></i>
        <i v-if="topRight" class="pin pin-top-right"></i>
        <i v-if="bottomLeft" class="pin pin-bottom-left"></i>
        <i v-if="bottomRight" class="pin pin-bottom-right"></i>
    <div>
</template>



<script>
    module.exports = {
        props: {
            topLeft: {
                default: true,
                type: Boolean
            },

            topRight: {
                default: true,
                type: Boolean
            },

            bottomLeft: {
                default: true,
                type: Boolean
            },

            bottomRight: {
                default: true,
                type: Boolean
            }
        }
    }
</script>



<style scoped>
</style>
