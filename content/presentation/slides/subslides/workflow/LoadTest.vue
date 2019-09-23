<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>switch back to <code>RStudio</code></li>
                <li>load the package files in memory using <code>load_all(".")</code></li>
                <li>test the functions accordingly (e.g., use code below):</li>
            </ol>

<!-- Code in wierd position. -->
<div class="code">
<pre><code class="hljs r">library(datasets)
head(cars)
test <- get.bootstrap(data = cars, 
                      statistic = get.lm, 
                      replicates = 1e4, 
                      formula = speed ~ dist)
print(test)
</code></pre>
</div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 1.6; --origin: bottom right">
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "load-test",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Load and test the functions",

                img: { src: "content/presentation/assets/img/load_test.png", alt: "Initialize repository" }
            }
        }
    }
</script>



<style scoped>
    .canvas-left {
        flex: 2 !important;
    }

    .content-right {
        justify-content: center;
    }

    .code {
        font-size: 1.6rem;
    }

    .code pre {
        margin: 1.5rem auto 0 auto;
    }
</style>
