<script>

export default {
    name: 'AppImages',
    props:{
        'image': String,
        'titolo': String,
        'genere': String,
    }
    
}

</script>

<template>
    
    <div class="hits">
        <img :src="image" alt="img">
        <h3>{{ titolo }}</h3>
        <span>{{ genere }}</span>
    </div>
    

</template>

<style lang="scss" scoped>
.watchlist{
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}
h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: var(--global-palette3);
}
h3 {
    font-weight: 700;
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}
.text{
    
    font-weight: 400;
    font-size: 17px;
    line-height: 1.8;
    letter-spacing: 0.2px;
    text-transform: none;
}
.hits{
    
    height: 400px;
    width: calc(100% / 3 - 1.875rem);
    text-align: center;
     img{
        width: 100%;
        margin-bottom: 25px;
     }
  }



</style>