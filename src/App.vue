<template>
  <div id="app">
    <BaseMain/>
  </div>
</template>

<script>
import BaseMain from './components/main/BaseMain.vue'
export default {
  name: 'App',
  components:{
    BaseMain,
  }
}
</script>

<style lang="scss">
@import './assets/style/global.scss';
</style>
