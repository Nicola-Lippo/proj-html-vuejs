<script>
import pelicula from '/src/components/nicola/pelicula.vue';
import YourWatchlist from '../data/YourWatchlist.vue';
import PropsComponentsAboutTeam from '../data/PropsComponentsAboutTeam.vue';
import AppImgMc from '../components/AppImgMc.vue';
import carosello from '../components/carosello.vue';
import BlackBar from '../components/nicola/BlackBar.vue';
import CollaBorate from '../components/nicola/CollaBorate.vue';
import AppScrollImg from '../components/AppScrollImg.vue';
import JohnDoe from '../components/nicola/JohnDoe.vue';
import LatestNews from '../data/LatestNews.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula, AppImgMc, YourWatchlist, carosello, BlackBar, PropsComponentsAboutTeam, CollaBorate, AppScrollImg, JohnDoe, LatestNews
    },


};
</script>

<template>
    <carosello />
    <pelicula />
    <AppImgMc />
    <YourWatchlist />
    <BlackBar />
    <PropsComponentsAboutTeam />
    <JohnDoe />
    <LatestNews />
    <AppScrollImg />
    <CollaBorate />
</template>

<style></style>