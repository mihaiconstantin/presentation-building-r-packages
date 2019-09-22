<template>
    <section class="introduction"
        data-background-video="content/presentation/assets/vid/programming.mov" 
        data-background-color="#000000"
        data-background-opacity=".5" 
        data-background-video-loop="true">

        <div class="canvas shadow-md text-center">
            <!-- Presentation title. -->
            <h2 class="presentation-title" v-html="title"></h2>

            <!-- Authors. -->
            <p class="authors">Mihai Constantin and Giuseppe Arena</p>

            <!-- Institution logo. -->
            <img class="logo" src="content/presentation/assets/img/tiu_logo_small_light.png" alt="Tilburg University logo">
        </div>

    </section>
</template>



<script>
    module.exports = {
        data: () => {
            return {
                title: "Introduction to Building <br> <code>R</code> Packages"
            }
        }
    }
</script>



<style scoped>
    .canvas {
        border-radius: 10rem;
    }

    code {
        zoom: 1.3;
    }

    .authors {
        margin-top: 5rem;
        font-size: 1.2rem;
    }

    .logo {
        width: 80px;
        margin: 0 auto;
    }
</style>
