<template>
    <layout :title="title">
        <div class="slot-content text-center">
            <p>Your package is live!</p>
            <p>Anyone can install it using your <code>GitHub</code> username and package name.</p>

            <div class="code">
                <pre><code class="hljs r" data-line-numbers="1">devtools::install("mihaiconstantin/footstrap")</code></pre>
            </div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "remote-install",

        components: {
            'layout': httpVueLoader('../../layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "Remote installation"
            }
        }
    }
</script>



<style scoped>
    .slot-content p:first-of-type {
        margin: 0;
    }

    .slot-content p {
        margin-bottom: 0;
    }

    .code {
        font-size: 1.6rem;
    }

    .code pre {
        width: 50%;
        margin: 1.5rem auto 0 auto;
    }
</style>
