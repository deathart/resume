<template>
  <div class="text-center mb-20">
    <h1
      class="
        title-font
        mb-4
        text-4xl
        font-extrabold
        leading-10
        tracking-tight
        lg:leading-none lg:text-6xl
        text-base-300
        dark:text-neutral-content
      "
    >
      {{ title }}
    </h1>
    <p class="text-base-content leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
      {{ content }}
    </p>
    <div class="flex mt-6 justify-center">
      <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeadText',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    content: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>
