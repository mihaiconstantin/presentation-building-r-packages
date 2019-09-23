<template>
    <section class="resources" data-transition="convex">
        <layout title="Resources">
            <ul>
                <li><a href="https://hilaryparker.com/2014/04/29/writing-an-r-package-from-scratch">https://hilaryparker.com/2014/04/29/writing-an-r-package-from-scratch</a></li>
                <li><a href="https://r-pkgs.org/index.html">https://r-pkgs.org/index.html</a></li>
                <li><a href="http://r-pkgs.had.co.nz/">http://r-pkgs.had.co.nz/</a></li>
                <li><a href="https://cran.r-project.org/doc/manuals/R-exts.html">https://cran.r-project.org/doc/manuals/R-exts.html</a></li>
                <li><a href="http://portal.stats.ox.ac.uk/userdata/ruth/APTS2012/Rcourse10.pdf">http://portal.stats.ox.ac.uk/userdata/ruth/APTS2012/Rcourse10.pdf</a></li>
                <li><a href="https://cran.r-project.org/doc/contrib/Leisch-CreatingPackages.pdf">https://cran.r-project.org/doc/contrib/Leisch-CreatingPackages.pdf</a></li>
            </ul>
        </layout>

        <!-- <section class="handout" data-background-iframe="content/handout/handout.html"></section> -->

        <!-- <section class="cheatsheet" data-background-iframe="content/handout/cheatsheet.pdf" data-background-interactive></section> -->
    </section>
</template>



<script>
    module.exports = {
        name: "resources",

        components: {
            'layout': httpVueLoader('./layouts/OneColumn.vue'),
        }
    }
</script>



<style scoped></style>
