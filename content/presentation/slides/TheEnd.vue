<template>
    <!-- <section class="end text-center" data-transition="convex" data-background-image="content/presentation/assets/img/end.gif"> -->
    <section class="end text-center">
        <h1>Thank you!</h1>
    </section>
</template>



<script>
    module.exports = {
        name: "the-end",

        components: {
            'layout': httpVueLoader('./layouts/OneColumn.vue'),
        }
    }
</script>



<style scoped>
    .end {
        /* background-color: rgba(0, 0, 0, 0.3); */
        text-align: center;
        /* border-radius: 10rem; */
    }

    .end h1 {
        margin: 0;
        text-align: center;
        /* color: white; */
    }
</style>
