<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ul>
                <li>objective: use <code>summary()</code> on <code>boot</code> object returned by <code>get.bootstrap()</code></li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">

<!-- Code that must remain in a wierd position. -->
<pre><code class="hljs r" data-line-numbers>summary.boot <- function(boot) {
    # MLE standard errors.
    se.mle <- summary(lm(formula = boot$formula, data = boot$data))$coef[, 2]

    # Bootstrap standard errors.
    se.boot <- apply(boot$boot.sim, 2, sd)

    # Put all SEs together.
    se.all <- cbind(se.mle, se.boot)

    # Add column names.
    colnames(se.all) <- c("MLE", "Bootstrap")

    # Pretty print.
    cat("Comparison between Standard Errors:", "\n")
    print(se.all)
}
</code></pre>

        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "s3-summary",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Implement S3 `summary()` generic"
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
