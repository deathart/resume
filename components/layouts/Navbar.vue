<template>
  <div class="navbar mb-4 shadow-lg bg-neutral text-neutral-content rounded-none lg:rounded-box fixed lg:relative z-10 mt-0 lg:mt-4 w-full px-0 lg:px-4">
    <div class="flex-none lg:hidden">
      <label for="my-drawer-3" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div>
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold">
        BRABANT Louis
      </span>
    </div>
    <div class="flex-none hidden lg:block">
      <ul class="menu horizontal">
        <li>
          <NuxtLink to="/">
            <v-icon name="lead-pencil" class="mr-2" />
            Compétences
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="history">
            <v-icon name="history" class="mr-2" />
            Parcours
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="contact">
            <v-icon name="card-account-mail" class="mr-2" />
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
