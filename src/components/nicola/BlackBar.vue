<script>
export default {
    name: 'BlackBar'
}
</script>

<template>
    <div class="container-fluid h-300 d-flex justify-content-around align-items-center">
        <div class="row text-white">
            <div class="col-3">
                <div class="text-center spaziatura">
                    <div class="fs-1"><strong>780</strong></div>
                    <div class="fs-3"><strong>SATISFIED CLIENTS</strong></div>
                </div>
            </div>
            <div class="col-3">
                <div class="text-center spaziatura">
                    <div class="fs-1"><strong>20+</strong></div>
                    <div class="fs-3"><strong>OUR PROJECTS</strong></div>
                </div>
            </div>
            <div class="col-3">
                <div class="text-center spaziatura">
                    <div class="fs-1"><strong>10.000</strong></div>
                    <div class="fs-3"><strong>CUP OF COFFEE</strong></div>
                </div>
            </div>
            <div class="col-3">
                <div class="text-center spaziatura">
                    <div class="fs-1"><strong>10</strong></div>
                    <div class="fs-3"><strong>OUR AWARDS</strong></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.h-300 {
    height: 300px;
    background-image: url(https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Parallax-01.jpg);
    background-size: cover;
    background-attachment: fixed;
}

.spaziatura {
    padding-left: 3rem;
    padding-right: 3rem;
}
</style>