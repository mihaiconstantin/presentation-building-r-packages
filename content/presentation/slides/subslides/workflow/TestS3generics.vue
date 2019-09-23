<template>
    <layout :title="title">
        <!-- Left. -->
        <div slot="left" class="slot-content-left">
            <ol>
                <li>switch to <code>RStudio</code> and load <code>devtools</code> if necessary</li>
                <li>load all files in memory with <code>load_all(".")</code></li>
                <li>test the <code>S3</code> generics using the code below</li>
            </ol>

<!-- Testing code in wierd poisition. -->
<div class="code">
<pre><code class="hljs r" data-line-numbers>library(datasets)
head(cars)

# Apply the bootstrap.
test <- get.bootstrap(data = cars, 
                      statistic = get.lm, 
                      replicates = 1e4, 
                      formula = speed ~ dist)

# Test generics.
summary(test)
plot(test)
</code></pre>
</div>
        </div>

        <!-- Right. -->
        <div slot="right" class="slot-content-right">
            <img :src="img.src" :alt="img.alt" class="img-zoom" style="--factor: 2; --origin: top right">
        </div>

        <!-- Additional. -->
        <div slot="additional">
            <p>You can also check whether the welcome message (i.e., <code>Thank you for using `footstrap`!</code>) was printed when the package was loaded.</p>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "test-s3-generics",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumnsAdditionalInformation.vue'),
        },

        data: () => {
            return {
                title: "Test `S3` generic methods",

                img: { src: "content/presentation/assets/img/test_s3.png", alt: "Test S3 generic methods" }
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
