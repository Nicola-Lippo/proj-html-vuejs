<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'Appvue',

  components: {
    AppHeader,
    AppFooter,
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style>

</style>
