<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index" :class="{ fragment: index > 0 }" v-html="item"></li>
                <li class="fragment">you can find a good <a href="https://r-pkgs.org/namespace.html">introduction to <code>NAMESPACE</code> here</a></li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Namespace file" class="img-zoom" style="--factor: 1.5; --origin: top right">
        </div>

        <!-- Additional content. -->
        <div slot="additional" class="slot-content-additional">
            <p>The <code>roxygen2</code> package is one of the many packages <code>devtools</code> uses behind the sences. It is mainly used to 
            simplify the process of documenting packages and importanting and exporting functions.</p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "namespace",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "NAMESPACE file",

                img: "content/presentation/assets/img/namespace.png",

                items: [
                    "namespaces are a fairly advanced topic",
                    "require a good understanding of the <code>search path</code>",
                    "related to <code>loading</code> and <code>attaching</code> packages",
                    "<code>NAMESPACE</code> lists all the exported and imported objects",
                    "when using <code>roxygen2</code> this file should not be modified"
                ]
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 1.5 !important;
    }
</style>
