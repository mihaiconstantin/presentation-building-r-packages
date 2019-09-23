<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ol>
                <li>use <code>roxygen2</code> to document the <code>footstrap</code> package</li>
            </ol>
            <ul>
                <li>the convention is to create a new file <code>zzz.R</code> for the package documentation</li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">
            <!-- Code that must remain in a wierd position. -->
<div class="code">
<pre><code class="hljs r" data-line-numbers>#' Package title.
#'
#' @details
#' Multi-line package description.
#' 
#' @section Section name:
#' You can add multiple sections.
#'
#' @import grDevices
#'
#' @docType package
#'
#' @name footstrap
"_PACKAGE"
</code></pre>
</div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "package-documentation",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Document the package"
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
