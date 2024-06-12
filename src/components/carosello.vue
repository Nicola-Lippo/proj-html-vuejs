<script>
export default {
    name: 'carosello',
}

</script>

<template>
    <div class="container-fluid">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <!--ELEMNTO 1 CAROSELLO-->
                <div class="carousel-item active">
                    <img src="../pages/img/Main-Banner-1.jpg" class="d-block w-100" alt="banner">
                    <div class="carousel-caption d-block text-start">
                        <h5>CINEMATO STUDIO</h5>
                        <p class="big-text pb-4">ACTION AND<br /> INSPIRE PEOPLE</p>
                        <a class="p-3 btn btn-light" href="#">READ MORE</a>
                    </div>
                </div>
                <!--ELEMNTO 2 CAROSELLO-->
                <div class="carousel-item">
                    <img src="../pages/img/Main-Banner-2.jpg" class="d-block w-100" alt="banner">
                    <div class="carousel-caption d-block text-start">
                        <h5>CINEMATO DIRECTOR</h5>
                        <p class="big-text pb-4">DANCING WITH<br /> OF THE STARS</p>
                        <a class="p-3 btn btn-light" href="#">READ MORE</a>
                    </div>
                </div>
            </div>
            <!--BOTTONI CAROSELLO-->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.big-text {
    font-size: 80px;
}
</style>