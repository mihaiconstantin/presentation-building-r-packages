<template>
    <section class="code-example-second" data-transition="convex">
        <s3></s3>

        <add-s3></add-s3>

        <s3-definition></s3-definition>

        <s3-summary></s3-summary>

        <s3-plot></s3-plot>

        <on-attach></on-attach>
    </section>
</template>



<script>
    module.exports = {
        name: "code-example-second",

        components: {
            's3': httpVueLoader('./subslides/code-example/S3.vue'),
            'add-s3': httpVueLoader('./subslides/code-example/AddS3.vue'),
            's3-definition': httpVueLoader('./subslides/code-example/S3Definition.vue'),
            's3-summary': httpVueLoader('./subslides/code-example/S3Summary.vue'),
            's3-plot': httpVueLoader('./subslides/code-example/S3Plot.vue'),
            'on-attach': httpVueLoader('./subslides/code-example/OnAttach.vue')
        }
    }
</script>



<style scoped></style>
