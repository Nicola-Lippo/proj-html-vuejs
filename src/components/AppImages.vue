<script>
import { store } from '../store';
export default {
    name: 'AppImages',
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    
    
    <div class="container-fluid bg-black d-flex justify-content-center">
        <div class="container-SD">
            <div class="text">
                <span>YOUR WATCHLIST</span>
                <h2>BEST HITS MOVIES</h2>
            </div>
            <div v-for="index in this.store.aboutImg" :class="'hits'">
                <img :src="index.link" alt="">
            </div>

    
        </div>
    </div>


</template>

<style lang="scss" scoped>

.container-SD{
    width: 90%;
    padding: 3.125rem 0;
    background-color: aquamarine;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  .hits{
    
    width: calc(100% / 3 - 1.875rem);
    background-color: brown;
     img{
        width: 100%;
     }
  }
  .text{
    text-align: center;
    width: 100%;
  }
}
</style>