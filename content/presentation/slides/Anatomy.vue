<template>
    <section class="anatomy" data-transition="convex">
        <creation></creation>

        <folder-structure></folder-structure>

        <description></description>

        <namespace></namespace>

        <r></r>

        <man></man>

        <tests></tests>

        <others></others>
    </section>
</template>



<script>
    module.exports = {
        name: "anatomy",

        components: {
            'creation': httpVueLoader('./subslides/anatomy/Creation.vue'),
            'folder-structure': httpVueLoader('./subslides/anatomy/FolderStructure.vue'),
            'description': httpVueLoader('./subslides/anatomy/Description.vue'),
            'namespace': httpVueLoader('./subslides/anatomy/Namespace.vue'),
            'man': httpVueLoader('./subslides/anatomy/Man.vue'),
            'r': httpVueLoader('./subslides/anatomy/R.vue'),
            'tests': httpVueLoader('./subslides/anatomy/Tests.vue'),
            'others': httpVueLoader('./subslides/anatomy/Others.vue')
        }
    }
</script>



<style scoped></style>
