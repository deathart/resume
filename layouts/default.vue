<template>
  <div class="drawer bg">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <div class="flex flex-col mx-auto container">
        <Navbar />
        <nuxt class="md:mt-3 mt-20" />
        <Cookies />
        <Footer class="mt-4" />
      </div>
    </div>
    <Sidebar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    console.log('mounted');
    this.$colorMode.value = localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') as string : 'dark';
  }
})
</script>

<style lang="css">
.bg {
  background-image: url('~/assets/images/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
