<script>
export default {
    name: 'AppAbout'

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

</div>





</template>

<style>
.header{

height: 12vh;
width: 100vw;
display: flex;
justify-content: space-between;
padding: 0rem 1.25rem;
background-color: aquamarine;
}
.col-header{
    text-align: center;
    
    width: calc(100% / 3);
    background-color: blue;
}


</style>