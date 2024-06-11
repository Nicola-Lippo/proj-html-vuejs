<script>
import { store } from '../store';
import {AppImages} from '../components/AppImages.vue';
export default {
    name: 'AppAbout',
    data() {
        return {
            store,
        }
        
    },
    components:{
        AppImages,
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
    
    <AppImages/>












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
    min-height: 250px;
}
h1{
    font-weight: 700;
    font-size: 50px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-transform: uppercase; 
}

</style>