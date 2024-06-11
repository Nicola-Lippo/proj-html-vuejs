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
            <div class="col-6">
                <h2>contact us</h2>
                <div class="elementor-icon-box-content">
				    <h5 class="elementor-icon-box-title">
					    <span>Address Info</span>
				    </h5>
					<p class="elementor-icon-box-description">
						502 New Design Str, Melbourne, <br>
                        San Francisco, CA 94110, <br>
                        United States of America​ Australia
                    </p>
				</div>
                <div class="elementor-icon-box-content">
				    <h5 class="elementor-icon-box-title">
					    <span>Contact Info</span>
				    </h5>
					<p class="elementor-icon-box-description">
						068 26589 996<br>
                        demo@example.com
                    </p>
				</div>
                <div class="elementor-icon-box-content">
				    <h5 class="elementor-icon-box-title">
					    <span>Working Hours</span>
				    </h5>
					<p class="elementor-icon-box-description">
						Open: 8:00AM – Close: 18:00PM<br>
                        Saturday – Sunday: Close
                    </p>
				</div>
            </div>
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
p{
    font-weight: 400;
    font-size: 17px;
    line-height: 1.8;
    letter-spacing: 0.2px;
    text-transform: none;
}
h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}
h5{
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}
.border{
    border: 1px solid black;
}
.distance{
    padding: 2em 2em 2em 2em;
}
</style>