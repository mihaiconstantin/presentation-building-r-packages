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
                title: "`Git` for version control"
            }
        }
    }
</script>



<style scoped></style>
