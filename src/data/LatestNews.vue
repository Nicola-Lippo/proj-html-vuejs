<script>
import CardNews from '../components/nicola/CardNews.vue';
export default {
    name: 'LatestNews',
    components: {
        CardNews
    },
    data() {
        return {
            "news": [
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/blog01.jpg",
                    "data": "May 27, 2022",
                    "title": "HOW TO EDIT A FILM SCORE TO SERVE",
                    "upd": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/blog02.jpg",
                    "data": "November 06, 2021",
                    "title": "ARE YOU READY TO MAKE IT AWESOME",
                    "upd": "Struggling to sell one multi-million dollar home currently on the market wont stop actress."
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/blog03.jpg",
                    "data": "April 10, 2022",
                    "title": "LAST VIDEO WEBSITE YOU NEED FOR",
                    "upd": "Figure out your schedule early if you’re going to have a schedule. If a schedule makes the quality."
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/blog04.jpg",
                    "data": "March 01, 2022",
                    "title": "BAND UPRISING TO CULT STATUS",
                    "upd": "shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million."
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/blog05.jpg",
                    "data": "February 14, 2022",
                    "title": "BRINGING THE STAGE TO LIFE",
                    "upd": "Large also observed activity in the listener’s mirror neurons the neurons implicated."
                },
                {
                    "img": "https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/blog06.jpg",
                    "data": "December 07, 2022",
                    "title": "CADENZE RIOS PICKED FOR THE NEXT PICTURE",
                    "upd": "Creative SEO & Digital Marketing Solutions for your Business ghost flathead chain pickerel torpedo neon."
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container text-center mt-5 mb-5">
        <div><strong>LATEST NEWS</strong></div>
        <h2 class="p-3"><strong>ARTICLES UPDATED DAILY</strong></h2>
        <div class=" row">
            <div class="col-4" v-for="(msn, index) in news" :key="index">
                <CardNews :foto="msn.img" :date="msn.data" :titolo="msn.title" :text="msn.upd" />
            </div>
        </div>

    </div>
</template>

<style></style>