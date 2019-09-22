<template>
    <layout :title="title">
        <!-- Row. -->
        <div slot="row" class="slot-content-row">
            <p class="text-center">
                Developing an <code>R</code> package involves a series of repetitive steps. 
                It is important define and stick to an workflow that works best for you. 
                Below we propose an workflow that we enjoy.
            </p>
        </div>

        <!-- Left. -->
        <div slot="left">
            <ol>
                <li>asd</li>
            </ol>
        </div>

        <!-- Right. -->
        <div slot="right"></div>
    </layout>
</template>



<script>
    module.exports = {
        name: "check",

        components: {
            'layout': httpVueLoader('../../layouts/OneRowTwoColumns.vue'),
        },

        data: () => {
            return {
                title: "as"
            }
        }
    }
</script>



<style scoped>
    .slot-content-row p {
        margin: 0;
    }

    ol li {
        padding-left: .25rem;
    }
</style>
