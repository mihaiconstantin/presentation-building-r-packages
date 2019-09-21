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
                title: "`RStudio` for shortcuts"
            }
        }
    }
</script>



<style scoped></style>
