<script>
import { store } from '../store.js';

export default {
    name: 'AppTeamcm',
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
                <span>THE PERICUROS</span>
                <h2>MEET THE TEAM</h2>
            </div>
            <div v-for="index in this.store.aboutImgTeam" :class="'hits'">
                <img :src="index.link" alt="">
                <h3>{{ index.name }}</h3>
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
    width: calc(100% / 4 - 1.875rem);
    margin-bottom: 100px;
    text-align: center;
     img{
        width: 100%;
        margin-bottom: 20px;
     }
  }
  .text{
    text-align: center;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 30px;
  }
}
</style>