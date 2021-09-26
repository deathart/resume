<template>
  <div class="bg-base-200 rounded-lg p-4">
    <div class="text-center mb-20">
      <h1 class="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Compétences</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Attention de prendre en compte que le savoir à 100% n'existe pas.
      </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <section class="card text-indigo-200 body-font p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div class="mx-auto flex px-5 md:flex-row flex-col items-center jobcard">
        <div class="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <figure class="visible">
            <div class="">
              <div class="pt-10 px-2 sm:px-6">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                  Front-end
                </h1>
                <div class="flex flex-col md:flex-row">
                  <div class="lg:flex-grow md:w-1/2 w-full flex flex-col">
                    <p class="mb-4 text-sm text-gray-600">
                      CSS/JS/HTML
                    </p>
                    <div class="flex justify-between items-center">
                      <span>
                        HTML
                      </span>
                      <stars :data="5" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        CSS
                      </span>
                      <stars :data="5" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        JS
                      </span>
                      <stars :data="4" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        TS
                      </span>
                      <stars :data="4" />
                    </div>
                  </div>
                  <div class="lg:flex-grow md:w-1/2 w-full flex flex-col md:ml-12 ml-0">
                    <p class="mb-4 text-sm text-gray-600">
                      Framework & outils
                    </p>
                    <div class="flex justify-between items-center">
                      <span>
                        Vue.JS & Nuxt
                      </span>
                      <stars :data="4" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        Angular 2+
                      </span>
                      <stars :data="4" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        React / Preact
                      </span>
                      <stars :data="1" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        SCSS
                      </span>
                      <stars :data="5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div class="lg:max-w-lg md:w-1/3 w-5/6 sm:block hidden">
          <img class="object-cover object-center rounded" alt="hero" src="~/assets/images/frontendstack.png" />
        </div>
      </div>
    </section>
    <section class="card text-indigo-200 body-font p-5 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-20 mt-4">
      <div class="mx-auto flex px-5 md:flex-row flex-col items-center jobcard">
        <div class="lg:max-w-lg md:w-1/3 w-5/6 sm:block hidden">
          <img class="object-cover object-center rounded" alt="hero" src="~/assets/images/frontendstack.png" />
        </div>
        <div class="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <figure class="visible">
            <div class="">
              <div class="pt-10 px-2 sm:px-6">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                  Back-end
                </h1>
                <div class="flex flex-col md:flex-row">
                  <div class="lg:flex-grow md:w-1/2 w-full flex flex-col">
                    <p class="mb-4 text-sm text-gray-600">
                      CSS/JS/HTML
                    </p>
                    <div class="flex justify-between items-center">
                      <span>
                        HTML
                      </span>
                      <stars :data="5" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        CSS
                      </span>
                      <stars :data="5" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        JS
                      </span>
                      <stars :data="4" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        TS
                      </span>
                      <stars :data="4" />
                    </div>
                  </div>
                  <div class="lg:flex-grow md:w-1/2 w-full flex flex-col md:ml-12 ml-0">
                    <p class="mb-4 text-sm text-gray-600">
                      Framework & outils
                    </p>
                    <div class="flex justify-between items-center">
                      <span>
                        VUE.JS & Nuxt
                      </span>
                      <stars :data="4" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        Angular 2+
                      </span>
                      <stars :data="4" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        REACT
                      </span>
                      <stars :data="1" />
                    </div>
                    <div class="flex justify-between items-center">
                      <span>
                        SCSS
                      </span>
                      <stars :data="5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
