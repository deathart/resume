<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <div class="flex flex-col mx-auto container">
        <Navbar />
        <Header />
        <nuxt class="mt-4" />
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
})
</script>
