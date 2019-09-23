<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ul>
                <li>objective: use <code>plot()</code> on <code>boot</code> object returned by <code>get.bootstrap()</code></li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">

<!-- Code that must remain in a weird position. -->
<pre><code class="hljs r" data-line-numbers>plot.boot <- function(boot, breaks = 50) {
    # Get number of parameters.
    n.parameters <- dim(boot$boot.sim)[2]

    # Split screen.
    par(mfrow = rev(n2mfrow(n.parameters)))

    # Create plot template.
    for(i in 1:n.parameters) {
        hist(boot$boot.sim[, i], breaks = breaks, 
             freq = FALSE, 
             xlab = colnames(boot$boot.sim)[i], 
             main = colnames(boot$boot.sim)[i], 
             col = "papayawhip")
        box()
        abline(v = boot$obs.statistic[i], col = "red", lwd = 2, lty = 2)
        legend("topright", legend = c("MLE"), col = c("red"), lwd = 2, 
               lty = 2, ncol = 1, cex = 0.8, bty = "n")
    }

    mtext("Bootstrap distributions", side = 3, line = -1, outer = TRUE)

    # Un-split screen.
    par(mfrow = c(1, 1))
}
</code></pre>

        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "s3-plot",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Implement S3 `plot()` generic"
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
