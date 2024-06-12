<script>
import AppImages from '../components/AppImages.vue';
export default {
    name: 'PropsComponentsAboutHits',
    components: {
        AppImages
    },
    data() {
        return {
            cards: [
                {
                    img:"https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-01.jpg",
                    title: "SEVENTEENTH SUMMER",
                    gender: "Commercial, Music Video."
                },
                {
                    img:"https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-02.jpg",
                    title: "A MESSAGE TO SPACE",
                    gender: "Short Film"
                },
                {
                    img: "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-03.jpg",
                    title: "THE MOST BEAUTIFUL THING",
                    gender: "Music Video"
                },
                

            ]
        };
    },
}
</script>

<template>
<div class=" container-fluid d-flex justify-content-center ">
        <div class="container-SD">
            <div class="text"> 
                <span>YOUR WATCHLIST</span>
                <h2>BEST HITS MOVIES</h2>
            </div>
            
            <AppImages v-for="(card, index) in cards"
            :key="index"
            :image="card.img"
            :titolo="card.title"
            :genere="card.gender"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.text{
    h2{
        font-size: 40px;
        font-weight: 700;
    }
}
.container-SD{
    width: 90%;
    padding: 6.25rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  
  .text{
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
    
}
}

</style>