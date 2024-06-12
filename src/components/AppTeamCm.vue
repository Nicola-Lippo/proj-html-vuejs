<script>


export default {
    name: 'AppTeamcm',
    props:{
        image:String,
        name:String,
        testo:String,
    }
}

</script>

<template>
    <div class="card">
        <img :src="image" alt="immagine utente">
        <h3>{{ name }}</h3>
        <span>{{ testo }}</span>
    </div>
                

</template>

<style lang="scss" scoped>
.card{
    width: calc(100% / 4 - 30px);
    border: none;
    margin: 0px .625rem;
    text-align: center;
    img{
        padding-bottom: 20px;
    }
}


</style>