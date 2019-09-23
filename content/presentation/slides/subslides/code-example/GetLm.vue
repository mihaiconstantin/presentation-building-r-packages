<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ul>
                <li>thin wrapper around <code>lm()</code> to get regression weights</li>
                <li>using <code>VS Code</code> create a file called <code>get_lm.R</code> in the <code>R/</code> folder with the following function:</li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">

<!-- Code that must remain in a wierd position. -->
<pre><code class="hljs r" data-line-numbers>get.lm <- function(formula, data, indices) {
  return(lm(formula = formula, data = data[indices, ])$coef)
}</code></pre>

        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "get-lm",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Implementing the `get.lm()` function"
            }
        }
    }
</script>



<style scoped>
    .slot-content-bottom pre {
        margin: 0 auto;
    }

    .slot-content-bottom {
        font-size: 2.5rem;
    }
</style>
