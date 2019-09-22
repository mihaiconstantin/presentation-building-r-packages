<template>
    <section class="creation" data-transition="convex">
        <creation></creation>

        <folder-structure></folder-structure>
    </section>
</template>



<script>
    module.exports = {
        name: "anatomy",

        components: {
            'creation': httpVueLoader('./subslides/anatomy/Creation.vue'),
            'folder-structure': httpVueLoader('./subslides/anatomy/FolderStructure.vue')
        }
    }
</script>



<style scoped></style>
