<script>
    export default {
        name: 'Form'
    }
</script>
<template>
    <div class="container m-5">
        <div class="row">
            <div class="col-6">
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
            </div>
            <div class="col-6">destra</div>
        </div>
    </div>
</template>
<style scoped>
.form-floating{
    padding-top: 10px;
}
</style>