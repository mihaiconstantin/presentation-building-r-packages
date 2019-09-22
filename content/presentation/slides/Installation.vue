<template>
    <section class="installation" data-transition="convex">
        <check></check>

        <rstudio-r></rstudio-r>

        <vscode-git></vscode-git>

        <rtools></rtools>

        <keypoint></keypoint>
    </section>
</template>



<script>
    module.exports = {
        name: "installation",

        components: {
            'check': httpVueLoader('./subslides/installation/Check.vue'),
            'rstudio-r': httpVueLoader('./subslides/installation/RstudioR.vue'),
            'vscode-git': httpVueLoader('./subslides/installation/VsCodeGit.vue'),
            'rtools': httpVueLoader('./subslides/installation/Rtools.vue'),
            'keypoint': httpVueLoader('./subslides/installation/KeyPoint.vue')
        }
    }
</script>



<style scoped></style>
