<template>
    <div class="footer">
        <img class="logo slow-rotate" src="content/presentation/assets/img/tiu_logo_small_light.png" alt="Tilburg University logo">
        <span class="date">{{ date }}</span>
    </div>
</template>



<script>
    module.exports = {
        data() {
            return {
                date: new Date().toDateString()
            }
        }
    }
</script>



<style scoped>
    .footer {
        position: absolute;
        bottom: .5rem;
        left: .5rem;
    }

    .logo {
        width: 50px;
        margin-right: .5rem;
        vertical-align: middle;
    }

    .date {
        font-size: 1rem;
    }
</style>
