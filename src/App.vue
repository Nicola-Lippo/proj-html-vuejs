<script>
import AppHeader from './components/AppHeader.vue';
export default{
  name: 'Appvue',

  components:{
    AppHeader,
  }
}

</script>

<template>
  <AppHeader/>
  <router-view></router-view>
</template>

<style></style>
