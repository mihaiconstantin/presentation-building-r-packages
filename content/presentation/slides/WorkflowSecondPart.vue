<template>
    <section class="workflow-second-part" data-transition="convex">
        <load-test></load-test>

        <commit></commit>
        
        <check></check>

        <update-description></update-description>

        <function-documentation></function-documentation>

        <package-documentation></package-documentation>

        <document></document>
    </section>
</template>



<script>
    module.exports = {
        name: "workflow-second-part",

        components: {
            'load-test': httpVueLoader('./subslides/workflow/LoadTest.vue'),
            'commit': httpVueLoader('./subslides/workflow/Commit.vue'),
            'check': httpVueLoader('./subslides/workflow/Check.vue'),
            'update-description': httpVueLoader('./subslides/workflow/UpdateDescription.vue'),
            'function-documentation': httpVueLoader('./subslides/workflow/FunctionDocumentation.vue'),
            'package-documentation': httpVueLoader('./subslides/workflow/PackageDocumentation.vue'),
            'document': httpVueLoader('./subslides/workflow/Document.vue')
        }
    }
</script>



<style scoped></style>
