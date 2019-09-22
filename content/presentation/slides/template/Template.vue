<template>
    <layout :title="title"></layout>
</template>



<script>
    module.exports = {
        name: "template",

        components: {
            'layout': httpVueLoader('./layouts/OneRowTwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Set your own title, please!"
            }
        }
    }
</script>



<style scoped></style>
