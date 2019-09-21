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
                title: "`R` language for scripting"
            }
        }
    }
</script>



<style scoped></style>
