<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ul>
                <li>the main function of the <code>footstrap</code> package</li>
                <li>using <code>VS Code</code> create a file called <code>get_bootstrap.R</code> in the <code>R/</code> folder with the following function:</li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">

<!-- Code that must remain in a weird position. -->
<pre><code class="hljs r" data-line-numbers>get.bootstrap <- function(data, statistic, replicates, formula) {
    # Get the number of rows.
    n <- nrow(data)

    # Create random samples with replacement.
    samples <- matrix(sample(1:n, n * replicates, replace = T), nrow = replicates, ncol = n)

    # Run the bootstrap over the samples.
    boot.sim <- t(apply(samples, 1, function(x) statistic(formula = formula, data = data, indices = x)))

    # Create the output object.
    out <- list()
    out$boot.sim <- boot.sim
    out$obs.statistic <- statistic(formula = formula, data = data, indices = 1:n)
    out$data <- data
    out$formula <- formula

    return(out)
}
</code></pre>

        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "get-bootstrap",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Implementing the `get.bootstrap()` function"
            }
        }
    }
</script>



<style scoped>
    .slot-content-bottom pre {
        margin: 0 auto;
    }

    .slot-content-bottom {
        font-size: 1.55rem;
    }
</style>
