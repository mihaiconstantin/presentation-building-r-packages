<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ol>
                <li>use <code>roxygen2</code> to export and document the main function <code>get.bootstrap()</code></li>
            </ol>
            <ul>
                <li>you may want to consult <a href="https://cran.r-project.org/web/packages/roxygen2/vignettes/rd.html">this resource</a> to get familiar with the keywords used by <code>roxygen2</code></li>
                <li>the code below ilustrates the main keywords usd to document a function</li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">
            <!-- Code that must remain in a wierd position. -->
<div class="code">
<pre><code class="hljs r" data-line-numbers>#' The title goes here.
#'
#' The subtitle goes here.
#'
#' A long description that spans over multiple rows is allowed right here. 
#' Note that `roxygen2` documentation starts with `#'`. Also, spacing matters.
#'
#' @param data The argument type. Additional description for the argument.
#' @param statistic The argument type. Additional description for the argument.
#' @param replicates The argument type. Additional description for the argument.
#' @param formula The argument type. Additional description for the argument.
#'
#' @return Description about the return type of the function. Similarly, the return 
#' description can also span over multiple rows and the spacing matters.
#'
#' @examples
#' \dontrun{
#' test <- get.bootstrap(data = cars, statistic = get.lm, replicates = 1e4, formula = speed ~ dist)
#' }
#' @export
get.bootstrap <- function(data, statistic, replicates, formula) { ... }
</code></pre>
</div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "function-documentation",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Document the main function"
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

    .slot-content-top ol li {
        margin-bottom: 1.5rem;
    }
</style>
