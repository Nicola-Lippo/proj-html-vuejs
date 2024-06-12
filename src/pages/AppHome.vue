<script>
import pelicula from '/src/components/pelicula.vue';
import YourWatchlist from '../components/YourWatchlist.vue';
import PropsComponentsAboutTeam from '../data/PropsComponentsAboutTeam.vue';
import AppImgMc from '../components/AppImgMc.vue';
import carosello from '../components/carosello.vue';
import BlackBar from '../components/BlackBar.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula, AppImgMc, YourWatchlist, carosello, BlackBar,PropsComponentsAboutTeam
    },


};
</script>

<template>
    <carosello />
    <pelicula />
    <AppImgMc />
    <YourWatchlist />
    <BlackBar />
    <PropsComponentsAboutTeam/>
</template>

<style></style>