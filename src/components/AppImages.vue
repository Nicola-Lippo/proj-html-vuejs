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
    
    
    <div class="container-fluid d-flex justify-content-center">
        <div class="container-SD">
            <div class="text">
                <span>YOUR WATCHLIST</span>
                <h2>BEST HITS MOVIES</h2>
            </div>
            <div v-for="index in this.store.aboutImg" :class="'hits'">
                <img :src="index.link" alt="">
                <h3>{{ index.title }}</h3>
                <span>{{ index.text }}</span>

            </div>

    
        </div>
    </div>


</template>

<style lang="scss" scoped>

.container-SD{
    width: 90%;
    padding: 3.125rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  .hits{
    
    height: 400px;
    width: calc(100% / 3 - 1.875rem);
    text-align: center;
     img{
        width: 100%;
        margin-bottom: 20px;
     }
  }
  .text{
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>