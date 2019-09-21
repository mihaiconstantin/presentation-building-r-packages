<template>
    <layout :title="title"></layout>
</template>



<script>
    module.exports = {
        name: "r",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "`R tools` for building packages"
            }
        }
    }
</script>



<style scoped></style>
