<template>
  <div class="inline-flex items-center justify-between px-2 py-1">
    <span class="">
      <svg class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
    <div :class="{ 'bg-indigo-500': toggleActive}" class="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1" @click="changeTheme()">
      <div class="bg-white w-5 h-5 rounded-full shadow-md transform" :class="{ 'translate-x-7': toggleActive}"></div>
    </div>
    <span class="">
      <svg class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      toggleActive: false
    }
  },
  mounted() {
    this.toggleActive = this.$colorMode.value === 'dark';
    if (!this.toggleActive && this.$colorMode.value === 'system') {
      this.changeTheme();
    }
  },
  methods: {
    changeTheme () {
      this.toggleActive = !this.toggleActive;
      this.$colorMode.value = this.toggleActive ? 'dark' : 'light';
    }
  }
})
</script>
