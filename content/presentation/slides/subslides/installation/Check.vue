<template>
    <layout :title="title">
        <p class="text-center">We will briefly go trough each tool and make sure it works as intended.</p>
        <p class="text-center">Please follow along!</p>
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
                title: "Installation check"
            }
        }
    }
</script>



<style scoped></style>
