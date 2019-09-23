<template>
    <layout :title="title">
        <div class="slot-content">
            <ul>
                <li>the naming system is: <code>generic name</code> <code>.</code> <code>class name</code></li>
                <li class="fragment">where <code>generic name</code> refers to the name of the function we want to call (e.g., <code>summary</code>, <code>plot</code> etc.)</li>
                <li class="fragment">and <code>class name</code> refers to the class attributed added to the object (e.g., <code>boot</code>)</li>
            </ul>

            <div class="aside fragment">
                <hr class="hr-stretch">
                <h4>In our case we will define two <code>generic</code> methods:</h4>
                <ul>
                    <li><code class="hljs r">summary.boot <- function() { ... }</code></li>
                    <li><code class="hljs r">plot.boot <- function() { ... }</code></li>
                </ul>
            </div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "s3-definition",

        components: {
            'layout': httpVueLoader('../../layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "Defining a `S3` generic"
            }
        }
    }
</script>



<style scoped>
    .aside ul {
        margin-left: 2.5rem;
    }
</style>
