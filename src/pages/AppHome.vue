<script>
import pelicula from '/src/components/pelicula.vue';
import YourWatchlist from '../components/YourWatchlist.vue';
import AppTeamCm from '../components/AppTeamCm.vue';
import AppImgMc from '../components/AppImgMc.vue';
import carosello from '../components/carosello.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula, AppTeamCm, AppImgMc, YourWatchlist, carosello
    },


};
</script>

<template>
    <carosello />
    <pelicula />
    <AppImgMc />
    <YourWatchlist />
    <AppTeamCm />
</template>

<style></style>