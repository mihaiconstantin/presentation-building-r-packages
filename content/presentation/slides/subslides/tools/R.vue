<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <ul>
                <li v-for="(item, index) in items" :key="index">{{ item }}</li>
            </ul>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="logo" class="shadow-sm tool-logo" alt="R lagnauge logo">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "r",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "`R` language for scripting",

                logo: "content/presentation/assets/img/r_logo.jpg",

                items: [
                    "implement your methdology",
                    "run your simulations",
                    "etc. etc."
                ]
            }
        }
    }
</script>



<style scoped>
    /* Force different alignment from template. */
    .content-right {
        align-items: center;
        justify-content: center;
    }

    .slot-content-right .tool-logo {
        width: 150px;
        margin: 0;
    }
</style>
