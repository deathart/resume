<template>
  <div class="navbar mb-4 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold">
        BRABANT Louis
      </span>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <NuxtLink to="/" class="btn btn-ghost btn-sm rounded-btn">
          <v-icon name="github" class="inline-block w-5 mr-2 stroke-current" />
          Compétences
        </NuxtLink>
        <NuxtLink to="history" class="btn btn-ghost btn-sm rounded-btn">
          <v-icon name="github" class="inline-block w-5 mr-2 stroke-current" />
          Parcours
        </NuxtLink>
        <NuxtLink to="contact" class="btn btn-ghost btn-sm rounded-btn">
          <v-icon name="github" class="inline-block w-5 mr-2 stroke-current" />
          Contact
        </NuxtLink>
      </div>
    </div>
    <div class="flex-none sm:flex">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</template>
