<script>

export default {
    name: 'AppImgMc',

}

</script>

<template>
    <div id="image" class="container-fluid d-flex justify-content-end ">
        <div class="col-6  d-flex justify-content-center flex-column">
            <span class="about mb-3">ABOUT US</span>
            <h2 class="mb-4">HIGH QUALITY CINEMATICS</h2>
            <p>Orci varius penatibus et magnis dis parturient In the montes, nascetur ridiculus mus. Nulla
                A nisi ut mi efficitur hendrerit. nunc urna. quisque a partr hendrerit purus erat, nec dapibus
                sem sed. phasellus sed eli molestie, porttitor ligula of the egestas, mattis augue. quisque et
                rhoncus justo. suspendisse luctus pharetra eleme tcondimentum.</p>
            <button>READ MORE</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#image {
    color: white;
    background-image: url('/src/pages/img/About-Us.jpg');
    height: 570px;
}

button {
    margin: 40px 0px;
    background-color: white;
    border: none;
    width: 180px;
    height: 60px;
}

.about {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

h2 {
    line-height: 50px;
    font-weight: 700;
    font-size: 40px;
}

p {
    font-weight: 400;
    font-size: 17px;
    line-height: 1.8;
    letter-spacing: 0.2px;
    text-transform: none;
}
</style>