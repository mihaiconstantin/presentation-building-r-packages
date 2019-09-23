<template>
    <layout :title="title">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ul>
                <li><code>.onAttach()</code> is a special hook that runs a piece of code whenever the package is attached</li>
                <li>we can place it below the package documentation in <code>zzz.R</code> located in the <code>R/</code> folder</li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">

<!-- Code that must remain in a wierd position. -->
<pre><code class="hljs r" data-line-numbers>.onAttach <- function(libname, pkgname) {
    # Print a welcome message when the package is attached.
    cat(rep("-", 20), "\n")
    cat("Thank you for using `footstrap`!", "\n")
    cat(rep("-", 20), "\n")
}
</code></pre>

        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "on-attach",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Implementing `.onAttach` hook"
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
