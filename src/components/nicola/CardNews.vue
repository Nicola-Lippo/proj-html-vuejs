<script>
export default {
    name: 'CardNews',
    props: ['foto', 'date', 'titolo', 'text']
}
</script>

<template>
    <div class="m-2 text-start">
        <img :src="foto" :alt="img">
        <p class="pt-3">{{ date }}</p>
        <div class="pb-2"><strong>{{ titolo }}</strong></div>
        <div>{{ text }}</div>

    </div>
</template>

<style scoped>
img {
    width: 100%;
}

p {
    color: gray;
}
</style>