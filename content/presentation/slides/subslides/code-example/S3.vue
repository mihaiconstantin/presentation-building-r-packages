<template>
    <layout :title="title" :fragment="true">
        <!-- Top. -->
        <div slot="top" class="slot-content-top">
            <ul>
                <li>simply put, <code>OOP</code> is a way of organizing functions around objects (i.e., instances of particular classes)</li>
                <li class="fragment"><code>R</code> provides <a href="https://adv-r.hadley.nz/oo.html">good support for the OOP paradigm</a>, althought different than other languages (e.g., <code>C++</code>)</li>
                <li class="fragment">at least four <code>OOP</code> systems: 
                    <code>S3</code> <span class="small">(informal and most used)</span>, 
                    <code>S4</code> <span class="small">(formal)</span>,
                    <code>RC</code> <span class="small">(reference semantics)</span>,
                    <code>R6</code> <span class="small">(our favourite)</span>
                </li>
            </ul>
        </div>

        <!-- Bottom. -->
        <div slot="bottom" class="slot-content-bottom">
            <h4>We will implement the <code>S3</code> system in our package:</h4>
            <ol>
                <li>define a class called <code>boot</code> for the output of <code>get.bootstrap()</code></li>
                <li class="fragment">write two <code>generic</code> methods (e.g., <code>summary</code> and <code>plot</code>) that dispatch on the <code>boot</code> class</li>
            </ol>
        </div>
    </layout>
</template>



<script>
    module.exports = {
        name: "s3",

        components: {
            'layout': httpVueLoader('../../layouts/TwoRows.vue'),
        },

        data: () => {
            return {
                title: "Object oriented programming (OOP) in `R`"
            }
        }
    }
</script>



<style scoped>
    .small {
        color: gray;
        font-size: .9rem;
    }

    .slot-content-bottom ol {
        margin-left: 3.5rem;
    }
</style>
