<script>

import { store } from '../store';
export default {
    name: 'AppScrollImg',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="container-fluid d-flex align-items-center justify-content-center">
        <div v-for="(img, index) in this.store.ScrollObj">
            <div v-if="index <= 4" :class="'card-carosell'">
                <img :src="img.image" alt="">
            </div>
            <div v-else-if="index >= 5" :class="'d-none'">
                <img :src="img.image" alt="">
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-image: url(https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Parallax-03.jpg);
    background-size: cover;
    height: 350px;
    background-attachment: fixed;

    .card-carosell {
        height: 7vw;
        width: 18vw;
        margin: 0px .625rem;
        display: flex;
        justify-content: center;

    }
}

img {
    width: 70%;
}
</style>