<template>
  <div class="bg-base-200 rounded-lg p-4 mx-4 lg:mx-0">
    <div class="text-center mb-20">
      <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-neutral-content">Contact</h1>
      <p class="text-base-content leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
      Lorem ipsum
      </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lille+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            <strong>Vous souhaitez me rencontrer ?</strong>
            Je suis disponible à <strong>Lille</strong> et ses alentours
          </p>
          <form v-if="!loading && !success && !error">
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Nom*</label>
              <input id="name" v-model="name" require type="string" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email*</label>
              <input id="email" v-model="email" require type="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message*</label>
              <textarea id="message" v-model="message" require name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click.prevent="send">Envoyer</button>
            <p class="text-xs text-gray-500 mt-3">* Champs obligatoires</p>
          </form>
          <div v-if="loading" class="alert">
            <div class="flex-1 text-gray-100">
              <label class="mx-auto">Envoie en cours</label>
            </div>
          </div>
          <div v-if="success" class="flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
            <div class="alert-icon md:flex hidden items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
              <span class="text-green-500">
                <svg fill="currentColor"
                  viewBox="0 0 20 20"
                  class="h-6 w-6">
                  <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                </svg>
              </span>
            </div>
            <div class="alert-content ml-4 flex-col">
              <div class="alert-title font-semibold text-lg text-green-800">
                Success
              </div>
              <div class="alert-description text-sm text-green-600">
                Message envoyé avec succès
              </div>
            </div>
          </div>
          <div v-if="error" class="flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
            <div class="alert-icon md:flex hidden items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
              <span class="text-red-500">
                <svg fill="currentColor"
                  viewBox="0 0 20 20"
                  class="h-6 w-6">
                  <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                </svg>
              </span>
            </div>
            <div class="alert-content ml-4 flex-col">
              <div class="alert-title font-semibold text-lg text-red-800">
                Error
              </div>
              <div class="alert-description text-sm text-red-600">
                Une erreur est survenue, contactez moi sur Twitter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      email: '',
      name: '',
      message: '',
      success: false,
      loading: false,
      error: false,
    }
  },
  methods: {
    send() {
      this.loading = true;
      this.$axios.$post('/mail/send', {
        from: this.email,
        subject: `Contact de ${this.name}`,
        text: this.message,
      }).then(() => {
        this.success = true;
        this.error = false;
        this.loading = false;
      }).catch(() => {
        this.success = false;
        this.error = true;
        this.loading = false;

      })
    }
  }
});
</script>
