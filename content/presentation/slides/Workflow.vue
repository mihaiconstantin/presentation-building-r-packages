<template>
    <section class="workflow" data-transition="convex">
        <overview></overview>
    </section>
</template>



<script>
    module.exports = {
        name: "workflow",

        components: {
            'overview': httpVueLoader('./subslides/workflow/Overview.vue')
        }
    }
</script>



<style scoped></style>
