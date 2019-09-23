<template>
    <section class="workflow-final-part" data-transition="convex">
        <test-s3-generics></test-s3-generics>
        
        <install></install>

        <readme></readme>

        <github></github>

        <remote-install></remote-install>
    </section>
</template>



<script>
    module.exports = {
        name: "workflow-final-part",

        components: {
            'test-s3-generics': httpVueLoader('./subslides/workflow/TestS3Generics.vue'),
            'install': httpVueLoader('./subslides/workflow/Install.vue'),
            'readme': httpVueLoader('./subslides/workflow/Readme.vue'),
            'github': httpVueLoader('./subslides/workflow/GitHub.vue'),
            'remote-install': httpVueLoader('./subslides/workflow/RemoteInstall.vue')
        }
    }
</script>



<style scoped></style>
