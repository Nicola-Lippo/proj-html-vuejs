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
    <div ><img src="https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/logo.svg" alt="logo"></div>
    <div class="d-flex align-items-center">
        <p v-for="index in this.store.header">{{index.name }}</p>
    </div>
    <div><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div>
    
  </div>
</nav>


</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    height: 4.375rem;
    padding: 0rem 1.25rem;
    background-color: aquamarine;
    
    img{
        width: 200px;
    }
    p{
        margin: 0rem .625rem;
    }
}



</style>