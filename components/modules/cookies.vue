<template>
  <div class="max-w-screen-lg mx-auto fixed bg-base-200 inset-x-5 p-5 bottom-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
    <div class="w-full">
      Ce site n'utilise pas de cookies, mais je trouve amusant de voir que vous en avez l'habitude.
      <a href="https://www.750g.com/cookies-aux-pepites-de-chocolat-r89377.htm" target="_blank" class="text-indigo-600 whitespace-nowrap hover:underline">Recette de cookies</a>
    </div>
    <div class="flex gap-4 items-center flex-shrink-0">
      <button class="text-indigo-600 focus:outline-none hover:underline">Refuser</button>
      <button class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Accepter</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      cookies: false
    }
  },
})
</script>
