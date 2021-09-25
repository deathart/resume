<template>
  <span class="mdi" :class="[`mdi-${name}`, `mdi-${size}px`, spin ? 'mdi-spin': '']" :style="{color: color}" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'VIcon',
  props: {
    color: {
      type: String,
      default: '#ffffff'
    },
    name: {
      type: String,
      default: ''
    },
    spin: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 24
    }
  }
});
</script>
