<script>
export default {
    name: 'AppContacts'
}
</script>

<template>
    <div class="img">
        <div class="d-flex justify-content-center align-items-center grandezza flex-column">
            <h1>contacts</h1>
            <p>Home / Contacts</p>
        </div>
            
    </div>
</template>

<style>
.img{
    background-image: url(./img/bredcum-img.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: scroll;
}
h1, p{
    color: white;
}
.grandezza{
    min-height: 250px;
}
</style>