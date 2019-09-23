<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>switch to <code>VS Code</code> and create <code>README.md</code> in <code>footstrap/</code></li>
                <li>add some <code>markdown</code> to the <code>README.md</code> file, e.g.:</li>
            </ol>

<!-- Code in wierd position -->
<div class="code">
<pre><code class="hljs md" data-line-numbers>## `footstrap` package

*`footstrap` is a silly attempt to illustrate the steps behind build an `R` package.* 

### Installation

You can install it by running `devtools::install_github("mihaiconstantin/footstrap")`.

### Basic usage

Basic usage
```r
library(footstrap)
library(datasets)
head(cars)

test <- get.bootstrap(data = cars, statistic = get.lm, replicates = 1e4, 
                      formula = speed ~ dist)
summary(test)
plot(test)
```
</code></pre>
</div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2.5; --origin: top right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            <p>
                <code>VS Code</code> has a built-in real-time <code>markdown</code> viewer. 
                You can click the loop icon on the top right corner to render your <code>markdown</code> in real time.
            </p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "readme",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Adding package brochure",

                img: { src: "content/presentation/assets/img/readme.png", alt: "Package brochure" }
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
        font-size: 1.2rem;
    }

    .code pre {
        width: 100%;
        margin: 1.5rem auto 0 auto;
    }
</style>
