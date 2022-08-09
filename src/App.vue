<template>
  <div>
    <header-vue></header-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderVue from './components/header-header.vue'
export default {
  name :'App', 
  components : {
    HeaderVue,
  }
}
</script>

<style>

</style>