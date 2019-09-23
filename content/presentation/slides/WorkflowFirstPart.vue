<template>
    <section class="workflow-first-part" data-transition="convex">
        <introduction></introduction>

        <create-package></create-package>

        <initialize-repository></initialize-repository>

        <vscode-rstudio></vscode-rstudio>
    </section>
</template>



<script>
    module.exports = {
        name: "workflow-first-part",

        components: {
            'introduction': httpVueLoader('./subslides/workflow/Introduction.vue'),
            'create-package': httpVueLoader('./subslides/workflow/CreatePackage.vue'),
            'initialize-repository': httpVueLoader('./subslides/workflow/InitializeRepository.vue'),
            'vscode-rstudio': httpVueLoader('./subslides/workflow/VsCodeRStudio.vue')
        }
    }
</script>



<style scoped></style>
