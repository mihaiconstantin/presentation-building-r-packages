<template>
    <layout :title="title">
        <div class="slot-content text-center">
            <p><code>footstrap</code> is a dummy package to bootstrap simple statistics.</p>

            <div class="fragment">
                <p>The package consists of two main functions:</p>
                <p class=""><code>get.lm()</code></p>
                <p class=""><code>get.bootstrap()</code></p>
            </div>

            <p class="fragment next">Let take a look at the code, but don't worry too much about it!</p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "introduction",

        components: {
            'layout': httpVueLoader('../../layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "The scope of the package"
            }
        }
    }
</script>



<style scoped>
    .slot-content p {
        margin: 0;
    }

    .slot-content p {
        margin-bottom: 1.5rem;
    }

    p.next {
        margin: 0;
    }
</style>
