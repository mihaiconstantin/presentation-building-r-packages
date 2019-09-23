<template>
    <section class="code-example-first" data-transition="convex">
        <introduction></introduction>

        <get-lm></get-lm>

        <get-bootstrap></get-bootstrap>
    </section>
</template>



<script>
    module.exports = {
        name: "code-example-first",

        components: {
            'introduction': httpVueLoader('./subslides/code-example/Introduction.vue'),
            'get-lm': httpVueLoader('./subslides/code-example/GetLm.vue'),
            'get-bootstrap': httpVueLoader('./subslides/code-example/GetBootstrap.vue')
        }
    }
</script>



<style scoped></style>
