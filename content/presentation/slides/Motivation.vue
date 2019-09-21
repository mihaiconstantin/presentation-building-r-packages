<template>
    <layout :title="title">
        <div class="slot-content">
            <ul class="reasons">
                <!-- Reasons. -->
                <li v-for="(item, index) in reasons" :key="index" class="fragment highlight-current-blue">{{ item }}</li>

                <!-- Additional reason. -->
                <li class="fragment fade-up">
                    <a href="https://r-pkgs.org/intro.html">many more reasons...</a>
                </li>
            </ul>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "motivation",

        components: {
            'layout': httpVueLoader('./layouts/OneColumn.vue'),
        },

        data: () => {
            return {
                title: "Why build an `R` package?",

                reasons: [
                    "standard way of organizing your scripts",
                    "easy way to share your code",
                    "contribute back to the community",
                    "easier indetify bugs and receive feedback"
                ]
            }
        }
    }
</script>



<style scoped></style>
