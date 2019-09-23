<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="o slot-content-top">
            <ul class="i">
                <li>before we start writing the <code>summary</code> and <code>plot</code> generics we need to define the <code>S3</code> class</li>
                <li>change <code>get.boostrap()</code> according to the highlighted code below</li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">

<!-- Code that must remain in a wierd position. -->
<pre><code class="hljs r" data-line-numbers="18,19">get.bootstrap <- function(data, statistic, replicates, formula) {
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

    # Define object class.
    class(out) <- "boot"

    return(out)
}
</code></pre>

        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "add-s3",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Define `S3` class"
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
