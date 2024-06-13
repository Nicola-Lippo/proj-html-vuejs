<script>
export default {
    name: 'JohnDoe'
}
</script>

<template>
    <div class="container-fluid h-600 d-flex">
        <div class="container d-flex justify-content-around align-items-center flex-column">
            <div><font-awesome-icon :icon="['fa', 'quote-left']" size="5x" /></div>
            <!--CAROSELLO-->
            <div>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active mb-5">
                            <div class="">
                                <p class="text-center">Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi
                                    dui, id<br />
                                    Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue
                                    Pellentesque<br />
                                    fringilla eget mi eu mollis. Mauris commodo.
                                </p>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img src="https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/01.jpg"
                                        alt="foto" width="64" height="64" class="rounded-circle me-2">
                                    <div>
                                        <div><strong>JOHN DOE</strong></div>
                                        <div>Designer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item mb-5">
                            <div class="">
                                <p class="text-center">Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi
                                    dui, id<br />
                                    Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue
                                    Pellentesque<br />
                                    fringilla eget mi eu mollis. Mauris commodo.
                                </p>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img src="https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/02.jpg"
                                        alt="foto" width="64" height="64" class="rounded-circle me-2">
                                    <div>
                                        <div><strong>JOHN DOE</strong></div>
                                        <div>Designer</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item mb-5">
                            <div class="">
                                <p class="text-center">Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi
                                    dui, id<br />
                                    Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue
                                    Pellentesque<br />
                                    fringilla eget mi eu mollis. Mauris commodo.
                                </p>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img src="https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/03.jpg"
                                        alt="foto" width="64" height="64" class="rounded-circle me-2">
                                    <div>
                                        <div><strong>JOHN DOE</strong></div>
                                        <div>Designer</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.h-600 {
    height: 600px;
    background-image: url(https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/Parallax-02.jpg);
    background-size: cover;
    background-attachment: fixed;
    color: white;
}
</style>