<script>
export default {
    name: 'CardList',
    props: ['foto', 'titolo', 'tipo']
}
</script>

<template>
    <div class="m-2">
        <img :src="foto" :alt="img">
        <div class="p-3"><strong>{{ titolo }}</strong></div>
        <p>{{ tipo }}</p>
    </div>
</template>

<style scoped>
img {
    width: 100%;
}
</style>