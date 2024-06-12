<script>
import { store } from '../store';
import AppImgMc from '../components/AppImgMc.vue';
import AppTeamCm from '../components/AppTeamCm.vue';
import AppScrollImg from '../components/AppScrollImg.vue';
import PropsComponentsAboutHits from '../data/PropsComponentsAboutHits.vue';
import PropsComponentsAboutTeam from '../data/PropsComponentsAboutTeam.vue';
export default {
    name: 'AppAbout',
    data() {
        return {
            store,
        }
        
    },
    components:{
        AppImgMc,AppTeamCm,AppScrollImg,PropsComponentsAboutHits,PropsComponentsAboutTeam
    }
}

</script>

<template>
    <div class="img">
        <div class="d-flex justify-content-center align-items-center grandezza flex-column">
            <h1>About</h1>
            <p>
                <span>
                    <router-link to="/">Home</router-link>
                </span>
                 / About</p>
        </div>
        
    </div>
    
    
    <PropsComponentsAboutHits/>

    <AppImgMc/>

    <PropsComponentsAboutTeam/>

    <AppScrollImg/>








</template>

<style lang="scss" scoped>
.img{
    background-image: url(./img/bredcum-img.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: scroll;
    
}
h1, p, a{
    color: white;
}
.grandezza{
    min-height: 300px;
}
h1{
    font-weight: 700;
    font-size: 50px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-transform: uppercase; 
}
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