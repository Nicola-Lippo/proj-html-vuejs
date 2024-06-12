<script>
import pelicula from '/src/components/pelicula.vue';
import YourWatchlist from '../components/YourWatchlist.vue';
import AppTeamCm from '../components/AppTeamCm.vue';
import AppImgMc from '../components/AppImgMc.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula,AppTeamCm,AppImgMc,YourWatchlist
    },


};
</script>

<template>
    <pelicula />
    <AppTeamCm/>
=======
    <AppImgMc />
    <YourWatchlist />

</template>

<style></style>