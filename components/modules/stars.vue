<template>
  <div class="flex items-center mt-2 mb-4">
    <svg v-for="n in data" :key="n" class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg v-for="n2 in (5 - data)" :key="n2 + 'key'" class="mx-1 w-4 h-4 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    data: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      stars: [
        {
          id: 0,
          class: 'text-yellow-500',
        }
      ]
    }
  }
});
</script>
