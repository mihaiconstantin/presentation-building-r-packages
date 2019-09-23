<template>
    <layout :title="title" :fragment="true">
        <!-- Top row. -->
        <div slot="top" class="slot-content-top">
            <h4>We don't really need that many tools...</h4>

            <ul class="points">
                <li v-for="(item, index) in topRowItems" :key="index" v-html="item"></li>
            </ul>
        </div>


        <div slot="bottom" class="slot-content-bottom">
            <h4>The main package we need is <code>devtools</code>:</h4>

            <ul class="points">
                <li v-for="(item, index) in bottomRowItems" :key="index" v-html="item"></li>
            </ul>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "keypoint",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Key points",

                topRowItems: [
                    "you can build a package only with <code>R</code>, <code>R tools</code> and <code>Notepad</code>",
                    "however, the tools mentioned makes the process more convenient and fun"
                ],

                bottomRowItems: [
                    "automates most of the steps needed to build an <code>R</code> package",
                    "allows us to focus on <span class='highlight green'>what</span> the packages should do rather than <span class='highlight'>how</span> to structure it"
                ]
            }
        }
    }
</script>



<style scoped>
    code {
        font-weight: bold;
    }

    ul {
        margin-left: 3.5rem;
    }

    .highlight {
        font-style: normal;
    }

    .green {
        background-color: green;
    }
</style>
