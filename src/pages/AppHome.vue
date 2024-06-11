<script>
import pelicula from '/src/components/pelicula.vue';
import AppTeamCm from '../components/AppTeamCm.vue';
export default {
    name: 'AppHome',
    components: {
        pelicula,AppTeamCm
    }
}
</script>

<template>
    <pelicula />
    <AppTeamCm/>
</template>

<style></style>