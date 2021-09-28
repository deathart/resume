<template>
  <div class="drawer-side">
    <label ref="clickedSidebar" for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
      <li class="bordered">
        <span class="text-lg font-bold">
          BRABANT Louis
        </span>
      </li>
      <li @click="onClickButton('/')">
        <a>
          <v-icon name="lead-pencil" class="inline-block w-5 mr-2 stroke-current" />
          Compétences
        </a>
      </li>
      <li @click="onClickButton('history')">
        <a>
          <v-icon name="history" class="inline-block w-5 mr-2 stroke-current" />
          Parcours
        </a>
      </li>
      <li @click="onClickButton('contact')">
        <a>
          <v-icon name="card-account-mail" class="inline-block w-5 mr-2 stroke-current" />
          Contact
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    onClickButton (page: string) {
      (this.$refs.clickedSidebar as any).click();
      this.$router.push(page);
    }
  }
})
</script>
