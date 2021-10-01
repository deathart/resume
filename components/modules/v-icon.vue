<template>
  <span :class="['iconify', custom]" :data-icon="getIcon" :style="getStyle" />
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
    custom: {
      type: String,
      default: ''
    },
    logo:  {
      type: Boolean,
      default: false
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
    },
  },
  computed: {
    getStyle() {
      const style: any = {'font-size': `${this.size}px`};

      if (!this.logo) {
        style.color = this.color;
      }

      return style;
    },
    getIcon() {
      return `${this.logo ? 'logos' : 'mdi'}:${this.name}`;
    }
	},
});
</script>
