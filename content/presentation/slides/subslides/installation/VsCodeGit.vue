<template>
    <layout :title="title">
        <!-- Left content. -->
        <div slot="left" class="slot-content-left">
            <h4>Steps:</h4>
            <ol>
                <li v-for="(item, index) in steps" :key="index" v-html="item"></li>
            </ol>

            <hr class="hr-stretch">

        <h4>If <code>git</code> is not found:</h4>
            <ol>
                <li v-for="(item, index) in fixes" :key="index" v-html="item"></li>
            </ol>
        </div>

        <!-- Right content. -->
        <div slot="right" class="slot-content-right">
            <img :src="img" alt="Git check">

            <div class="additional-information">
                <h4>For more information see:</h4>
                <ul>
                    <li><a href="https://superuser.com/a/284351/657327">this link</a> on environmental variables</li>
                    <li><a href="https://stackoverflow.com/a/26620861/5252007">and this link</a> on adding <code>git</code> to the <code>PATH</code></li>
                    <li>you can also add <code>R</code> (e.g., <code>C:\Program Files\R\R-3.6.1\bin</code>) to the <code>PATH</code> variable in order to use it from the <code>VS Code</code> terminal</li>
                </ul>
            </div>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "vscode-git",

        components: {
            'layout': httpVueLoader('../../layouts/TwoColumns.vue'),
        },

        data: () => {
            return {
                title: "VS Code and Git",

                img: "content/presentation/assets/img/git_check.png",

                steps: [
                    "open <code>VS Code</code>",
                    "under <code>Terminal</code> tab click <code>New Terminal</code>",
                    "in the terminal type <code>git --help</code>"
                ],

                fixes: [
                    "locate the installation folder (e.g., on Windows defaults to <code>C:\\Program Files\\Git</code>)",
                    "add <code>C:\\Program Files\\Git\\bin</code> to the operating system <code>PATH</code> variable"
                ]
            }
        }
    }
</script>



<style scoped>
    /* Force different alignment from template. */
    .canvas-left {
        flex: 1.5 !important;
    }

    .slot-content-right {
        flex: 1;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }

    .additional-information {
        font-size: .9rem;
    }

    .additional-information h4 {
        margin-top: 1.5rem;
        margin-bottom: .5rem;
    }

    .additional-information ul li:not(:last-of-type) {
        margin-bottom: .5rem;
    }

    .additional-information ul {
        margin-left: 2.5rem;
    }

    ol {
        margin-left: 3.5rem;
    }
</style>
