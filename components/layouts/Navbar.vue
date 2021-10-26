<template>
  <div class="flex flex-row text-neutral-content items-center p-5 lg:p-1 rounded-none lg:rounded-lg justify-between bg-neutral shadow-lg fixed lg:relative z-10 mt-0 lg:mt-4 w-full px-0 lg:px-4 mb-2">
    <NuxtLink exact to="/">
      <div class="ml-8 text-lg flex">BRABANT Louis</div>
    </NuxtLink>
    <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
      <label for="my-drawer-3" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div >
      <div class="flex flex-row mr-8 hidden md:flex">
        <div class="px-4 py-2 m-2">

        </div>
        <div class="px-4 py-2 m-2">
          <NuxtLink exact to="skills" class="group flex items-center">
            <v-icon name="lead-pencil" class="mr-2" custom="text-gray-100 group-hover:text-gray-400" color="" />
            <span class="text-gray-100 group-hover:text-gray-400">
              Compétences
            </span>
          </NuxtLink>
        </div>
        <div class="px-4 py-2 m-2">
          <NuxtLink exact to="history" class="group flex items-center">
            <v-icon name="history" class="mr-2" custom="text-gray-100 group-hover:text-gray-400" color="" />
            <span class="text-gray-100 group-hover:text-gray-400">
              Parcours
            </span>
          </NuxtLink>
        </div>
        <div class="px-4 py-2 m-2">
          <NuxtLink exact to="contact" class="group flex items-center">
            <v-icon name="card-account-mail" class="mr-2" custom="text-gray-100 group-hover:text-gray-400" color="" />
            <span class="text-gray-100 group-hover:text-gray-400">
              Contact
            </span>
          </NuxtLink>
        </div>
      </div>
  </div>
</template>

<style lang="postcss" scoped>
.navbar{
  padding: var(--navbar-padding, .5rem);
  min-height: 4rem;
}

.navbar-start{
  width:50%;
  justify-content: flex-start;
}

.navbar-center{
  flex-shrink: 0;
}

.navbar-end{
  width:50%;
  justify-content: flex-end;
}
</style>
