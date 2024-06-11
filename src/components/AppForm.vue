<script>
    export default {
        name: 'Form'
    }
</script>
<template>
    <div class="container m-5">
        <div class="row">
            
            <div class="col-6">
                <div class="border">
                    <div class="form-floating">
                        <p>Your name</p> 
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        
                    </div>
                    <div class="form-floating">
                        <p>Your email</p>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        
                    </div>
                    <div class="form-floating">
                        <p>Subject</p>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        
                    </div>
                    <div class="form-floating">
                        <p>Your message (optional)</p>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        
                    </div>
                    <div class="distance">

                        <button>submit</button>
                    </div>
                </div>
            </div>
            <div class="col-6">destra</div>
        </div>
    </div>
</template>
<style scoped>
.form-floating{
    padding-top: 10px;
    padding: 2em 2em 2em 2em;
}
button{
    background-color: black;
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 12px 40px 12px 40px;
    border: none;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    margin: 0 auto;
    margin-top: 20px;
}
.border{
    border: 1px solid black;
}
.distance{
    padding: 2em 2em 2em 2em;
}
</style>