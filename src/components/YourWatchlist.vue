<script>
import CardList from './CardList.vue';
export default {
    name: 'YourWatchlist',
    components: {
        CardList
    },
    data() {
        return {
            "cards": [
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-01.jpg",
                    "title": "SEVENTEENTH SUMMER",
                    "gender": "Commercial, Music Video."
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-02.jpg",
                    "title": "A MESSAGE TO SPACE",
                    "gender": "Short Film"
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-03.jpg",
                    "title": "THE MOST BEAUTIFUL THING",
                    "gender": "Music Video"
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-04.jpg",
                    "title": "PERMISSION TO SPEAK",
                    "gender": "Documentary"
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-05.jpg",
                    "title": "EXPLORE OUR SPACE",
                    "gender": "Film noir"
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Gallery-06.jpg",
                    "title": "FILM PRODUCTION",
                    "gender": "Blaxploitation"
                },

            ]
        };
    },
}
</script>

<template>
    <div class="container text-center mt-5 mb-5">
        <div><strong>YOUR WATCHLIST</strong></div>
        <h2 class="p-3"><strong>BEST HITS MOVIES</strong></h2>
        <div class=" row">
            <div class="col-4" v-for="(card, index) in cards" :key="index">
                <CardList :foto="card.img" :titolo="card.title" :tipo="card.gender" />
            </div>
        </div>
    </div>
</template>

<style></style>