<script>
export default {
    name: 'Header'

}
</script>

<template>
    <div class="header">
        <div class="col-header">
            <span>icons</span><span>title</span>
        </div>
        <div class="col-header">
            <span>link-list</span>
        </div>
        <div class="col-header">
            <span>search</span><span>icons</span>
        </div>

        <div class="header">
            <div class="col-header text-left">
                <img id="logo" src="https://wordpressthemes.live/WP02/WP031/wp-content/uploads/2022/08/logo.svg"
                    alt="logo">
            </div>
            <div class="col-header">
                <span>link-list</span>
            </div>
            <div class="col-header text-right">
                <span>search</span><span>icons</span>
            </div>

        </div>




    </div>

</template>

<style scoped>
.header {

    height: 12vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1.25rem;
    background-color: aquamarine;
}

.col-header {
    text-align: center;
    width: calc(100% / 3);
    background-color: blue;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

#logo {
    width: 200px;
}
</style>