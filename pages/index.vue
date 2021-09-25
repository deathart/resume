<template>
  <div class="bg-base-200 rounded-lg p-4">
    <div class="text-center mb-20">
      <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Compétences</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Attention de prendre en compte que le savoir à 100% n'existe pas.
      </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <section class="card text-indigo-200 body-font p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div class="mx-auto flex px-5 md:flex-row flex-col items-center jobcard">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <figure class="visible">
            <div class="">
              <div class="pt-10 px-2 sm:px-6">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                  Front-end
                </h1>

              </div>
            </div>
          </figure>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
          <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
