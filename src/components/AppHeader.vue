<script>
import { store } from '/src/store.js';
export default {

    data() {
        return {
            store,
        }
    }
}

</script >

<template>
    <nav class="header">
        <div class="container-fluid d-flex justify-content-between">
            <div><img src="https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/logo.svg" alt="logo"></div>
            <div class="align-items-center d-none d-md-flex">
                <p v-for="index in this.store.header">
                    <span v-if="index.link">
                        <router-link :to="index.link">{{ index.name }}</router-link>
                    </span>
                    <span v-else>
                        {{ index.name }}
                    </span>
                </p>
            </div>
            <div class="align-items-center d-flex d-md-none">

                <font-awesome-icon :icon="['fas', 'bars']" />

            </div>
            <div class="d-flex align-items-center">

                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />

            </div>

        </div>
    </nav>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    height: 4.375rem;
    padding: 0rem 1.25rem;
    background-color: white;
    color: black;

    img {
        width: 200px;
    }

    p {
        color: black;
        margin: 0rem .625rem;
    }
}

a:link {
    color: black;
    text-decoration: none;
}
</style>