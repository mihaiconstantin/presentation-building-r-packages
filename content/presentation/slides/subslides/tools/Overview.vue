<template>
    <layout :title="title" :fragment="true">

        <!-- Row content. -->
        <div slot="row" class="slot-content text-center">
            <p class="message">
                perhaps the most complicated part of developing and R package is <span class="highlight">setting-up the tools correctly</span>
            </p>
        </div>


        <!-- Left column content. -->
        <div slot="left" class="slot-content">
            <!-- Section subtitle. -->
            <h4>The bare minimum we need:</h4>

            <!-- Mandatory tools. -->
            <ul class="tools mandatory">
                <li v-for="(value, item, index) in mandatory" :key="index">
                    <a :href="value.link"><span class="tool-name">{{ item }}</span> <span class="tool-version">{{ `(${value.version})` }}</span></a>
                </li>
            </ul>
        </div>

        <!-- Right column content. -->
        <div slot="right" class="slot-content">
            <!-- Section subtitle. -->
            <h4>Optional, but handy:</h4>

            <!-- Optional tools. -->
            <ul class="tools optional">
                <li v-for="(value, item, index) in optional" :key="index">
                    <a :href="value.link"><span class="tool-name">{{ item }}</span> <span class="tool-version">{{ `(${value.version})` }}</span></a>
                </li>
            </ul>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "tools-overview",

        components: {
            'layout': httpVueLoader('../../layouts/OneRowTwoColumns.vue'),
        },

        data: () => {
            return {
                title: "Overview of the tools needed",

                mandatory: {
                    "R": { version: ">= 3.6.1", link: "https://cran.r-project.org" },
                    "R tools": { version: "= 3.5", link: "https://cran.r-project.org/bin/windows/Rtools" },
                    "Git": { version: ">= 2.23.0", link: "https://git-scm.com/download" },
                    "resilience": { version: "a lot of it", link: "https://www.apa.org/helpcenter/road-resilience" }
                },

                optional: {
                    "RStudio": { version: ">= 1.2.1335", link: "https://www.rstudio.com/products/rstudio/download" },
                    "VS Code": { version: "*", link: "https://code.visualstudio.com" }
                }
            }
        }
    }
</script>



<style scoped>
    .slot-content .message {
        line-height: 3.5rem;
        margin: 0;
    }

    .slot-content .tools {
        list-style-type: none;
    }

    .slot-content .tool-name, .slot-content .tool-version {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }

    .slot-content .tool-version {
        font-size: .9rem;
        color: gray;
    } 
</style>
