<template>
    <layout :title="title">
        <p class="text-center">Hopefully the installation went smoothly...</p>
        <p class="text-center">Now that we have a solid toolbox, we are ready to start talking about <br><br> building <code>R</code> packages!</p>
    </layout>
</template>



<script>
    module.exports = {
        name: "check",

        components: {
            'layout': httpVueLoader('../../layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "Installation summary"
            }
        }
    }
</script>



<style scoped></style>
