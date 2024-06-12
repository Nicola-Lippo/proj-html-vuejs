<script>
export default {
    name: 'CollaBorate'
}
</script>

<template>
    <form>
        <div class="container mt-5 mb-5">
            <div class="row">
                <h6>COLLABORATE</h6>
                <!--PRIMA COLONNA-->
                <div class="col-6">
                    <h2>WANT TO WORK WITH US?<br /> LEAVE US A MESSAGE!</h2>
                    <p>Duis sit amet congue ipsum. Nulla maximus My venenatis posuere.To The Mauris ut tempus Suspendisse
                        porta
                        tincidunt lectus non of me pellentesque. At A Sed blandit at diam sit amet Orci varius natoque
                        penatibus
                        et dis dis to parturient montes, My Car nascetur ridiculus Sed feugiat lacus in erat egestas, quis
                        eleifend lacus imperdiet.</p>
                </div>
                <!--SECONDA COLONNA-->
                <div class="col-6">
                    <!--CAMPI INPUT-->
                    <div class="d-flex mb-5">
                        <input class="form-control form-control-lg m-2" type="text" placeholder="your name"
                            aria-label=".form-control-lg example">
                        <input class="form-control form-control-lg m-2" type="email" placeholder="your email"
                            aria-label=".form-control-lg example">
                    </div>
                    <div class="d-flex mb-5">
                        <input class="form-control form-control-lg m-2" type="text" placeholder="your number"
                            aria-label=".form-control-lg example">
                        <input class="form-control form-control-lg m-2" type="text" placeholder="your pincode"
                            aria-label=".form-control-lg example">
                    </div>
                    <div class="mb-5">
                        <textarea class="form-control form-control-lg m-2" id="exampleFormControlTextarea1" rows="3"
                            placeholder="your text area"></textarea>
                    </div>
                    <button class="btn btn-dark p-3" type="button"><strong>SUBMIT NOW</strong></button>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>
p {
    color: gray;
}

input,
textarea {
    background-color: rgb(198, 198, 198);
}

button {
    width: 100%;
}
</style>