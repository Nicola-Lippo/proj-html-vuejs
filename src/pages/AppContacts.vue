<script>
import Mappa from '../components/AppMap.vue'
import Form from '../components/AppForm.vue'
export default {
    name: 'AppContacts',
    components: {
        Mappa,
        Form,
    }
}
</script>

<template>
    <div class="img">
        <div class="d-flex justify-content-center align-items-center grandezza flex-column">
            <h1>Contacts</h1>
            <p>
                <span>
                    <router-link to="/">Home</router-link>
                </span>
                 / Contacts</p>
        </div>
            
    </div>
    <Mappa></Mappa>
    <Form></Form>
</template>

<style scoped>
.img{
    margin-top: 90px;
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