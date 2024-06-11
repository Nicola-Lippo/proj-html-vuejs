<template>
    <footer>
        <div class="constainer-fluid">
            <div class="row">

                <ul class="col-3">
                    <li><strong>CONTACT INFO</strong></li>
                    <li>2/45 Tower Street, New York
                        USA</li>
                    <li>Call Us On 0800 840 1010</li>
                    <li>Demo@Example.Com</li>
                </ul>
                <ul class="col-3">
                    <li><strong>INFORMATION</strong></li>
                    <li>Product Support</li>
                    <li>Checkout</li>
                    <li>Report Abuse</li>
                    <li>Redeem Voucher</li>
                    <li>Order Status</li>
                </ul>
                <ul class="col-3">
                    <li><strong>USEFUL LINKS</strong></li>
                    <li>Policies & Rules</li>
                    <li>Privacy Policy</li>
                    <li>License Policy</li>
                    <li>My Account</li>
                    <li>Locality</li>
                </ul>
                <ul class="col-3">
                    <li><strong>NEWSLETTER</strong></li>
                    <li>Subscribe To Receive Inspiration,
                        Ideas & News In Your Inbox.</li>
                    <li><input type="text" placeholder="Enter Your Email"></li>
                    <li><button>SUBSCRIBE</button></li>
                </ul>
            </div>
        </div>
        
    </footer>
</template>
<style scoped>
li{
    list-style: none;
    padding: 10px;
}
footer{
    background-color: black;
    color: white;
    padding: 20px;
}
</style>
<script>
export default {
    name: 'AppFooter'
}
</script>