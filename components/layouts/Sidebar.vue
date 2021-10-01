<template>
  <div class="drawer-side">
    <label ref="clickedSidebar" for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-gray-100">
      <li class="text-center">
        <span class="title-font text-4xl font-extrabold leading-10 tracking-tight">
          BRABANT Louis
          <div class="flex mt-6 mb-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </span>
      </li>
      <li class="font-bold" @click="onClickButton('/')">
        <div class="flex items-center">
          <v-icon name="lead-pencil" class="inline-block w-5 mr-4 stroke-current" />
          Compétences
        </div>
      </li>
      <li class="font-bold mt-4" @click="onClickButton('history')">
        <div class="flex items-center">
          <v-icon name="history" class="inline-block w-5 mr-4 stroke-current" />
          Parcours
        </div>
      </li>
      <li class="font-bold mt-4" @click="onClickButton('contact')">
        <div class="flex items-center">
          <v-icon name="card-account-mail" class="inline-block w-5 mr-4 stroke-current" />
          Contact
        </div>
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
