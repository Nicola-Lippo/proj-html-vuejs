<script>
import AppTeamCm from '../components/AppTeamCm.vue';
export default {
    name: 'PropsComponentsAboutTeam',
    components: {
        AppTeamCm
    },
    data() {
        return {
            Team: [{
        img: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-01.jpg",
        name: 'FABRICIO GUERRA',
        text: 'Main Director',
    },
    {
        img: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-02.jpg",
        name: 'UMBERTO PAGODA',
        text: 'Main Writer',
    },
    {
        img: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-03.jpg",
        name: 'GLORIA RICCASSO',
        text: 'Main Producer',
    },
    {
        img: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Team-04.jpg",
        name: 'LIO NAPOIN',
        text: 'Cameraman',
    },]
        };
    },
}
</script>

<template>

    
    <div class="container-fluid d-flex justify-content-center">
        <div class="container-SD">
            <div class="text">
                <span class="pericuros">THE PERICUROS</span>
                <h2 class="mt-3">MEET THE TEAM</h2>
            </div>
            <AppTeamCm v-for="(card, index) in Team"
            :key="index"
            :image="card.img"
            :name="card.name"
            :testo="card.text"/>
        </div>
    </div>
    
    
</template>

<style lang="scss" scoped>
.pericuros {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}

h3 {
    margin-bottom: 7px;
    font-weight: 700;
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}

p {
    font-weight: 400;
    font-size: 17px;
    line-height: 1.8;
    letter-spacing: 0.2px;
}

.container-SD {
    width: 95%;
    padding: 3.125rem 0px 6.25rem 0rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    .text {
        text-align: center;
        width: 100%;
        margin-top: 60px;
        margin-bottom: 30px;
    }
}

   
</style>