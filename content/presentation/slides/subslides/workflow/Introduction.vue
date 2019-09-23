<template>
    <layout :title="title">
        <div class="slot-content text-center">
            <p>Building R packages is a combination of creative and repetitive tasks.</p>
            <p>Next, we will present a workflow to help you get started.</p>
            <p>Please follow along!</p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "introduction",

        components: {
            'layout': httpVueLoader('../../layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "Proposed workflow"
            }
        }
    }
</script>



<style scoped>
    .slot-content p:first-of-type {
        margin: 0;
    }

    .slot-content p {
        margin-bottom: 0;
    }
</style>
