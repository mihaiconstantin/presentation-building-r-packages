<template>
    <layout :title="title">
        <div class="slot-content">
            <ol class="agenda">
                <!-- Agenda. -->
                <li v-for="(item, index) in agenda" :key="index" class="fragment highlight-current-blue">{{ item }}</li>
            </ol>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "outline",

        components: {
            'layout': httpVueLoader('./layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "Workshop outline",

                agenda: [
                    "Overview of the tools needed to build packages",
                    "The anatomy of an `R` package",
                    "Example of combinding the tools into an workflow",
                    "Getting our hands dirty with code",
                    "Some curated resources"
                ]
            }
        }
    }
</script>



<style scoped>
    .slot-content ol {
        margin-left: 3rem;
    }

    .slot-content ol li {
        padding-left: .25rem;
    }
</style>
