<script>
import pelicula from '/src/components/pelicula.vue';
import AppImgMc from '../components/AppImgMc.vue';
import YourWatchlist from '../components/YourWatchlist.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula,
        AppImgMc,
        YourWatchlist
    }
};
</script>

<template>
    <pelicula />
    <AppImgMc />
    <YourWatchlist />
</template>

<style></style>