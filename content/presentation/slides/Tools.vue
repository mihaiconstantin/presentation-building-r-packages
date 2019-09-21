<template>
    <section class="tools" data-transition="convex">
        <overview></overview>
        <r></r>
        <rtools></rtools>
        <git></git>
        <rstudio></rstudio>
        <vscode></vscode>
    </section>
</template>



<script>
    module.exports = {
        name: "tools",

        components: {
            'overview': httpVueLoader('./subslides/tools/Overview.vue'),
            'r': httpVueLoader('./subslides/tools/R.vue'),
            'rtools': httpVueLoader('./subslides/tools/RTools.vue'),
            'git': httpVueLoader('./subslides/tools/Git.vue'),
            'rstudio': httpVueLoader('./subslides/tools/RStudio.vue'),
            'vscode': httpVueLoader('./subslides/tools/VsCode.vue'),
        }
    }
</script>



<style scoped></style>
