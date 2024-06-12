<script>
import pelicula from '/src/components/pelicula.vue';
import YourWatchlist from '../components/YourWatchlist.vue';
import AppTeamCm from '../components/AppTeamCm.vue';
import AppImgMc from '../components/AppImgMc.vue';
import carosello from '../components/carosello.vue';
import BlackBar from '../components/BlackBar.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula, AppTeamCm, AppImgMc, YourWatchlist, carosello, BlackBar
    },


};
</script>

<template>
    <carosello />
    <pelicula />
    <AppImgMc />
    <YourWatchlist />
    <BlackBar />
    <AppTeamCm />
</template>

<style></style>