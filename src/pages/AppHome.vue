<script>
import pelicula from '/src/components/pelicula.vue';
import AppImgMc from '../components/AppImgMc.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula,
        AppImgMc
    }
}
</script>

<template>
    <pelicula />
    <AppImgMc />
</template>

<style></style>