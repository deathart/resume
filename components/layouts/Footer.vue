<template>
  <footer
    class="
      p-10
      bg-gray-300
      dark:bg-base-200
      text-sm
      gap-y-10 gap-x-4
      text-base-300
      dark:text-base-content
      text-center
      place-items-center
      rounded-none
      sm:rounded-t-lg
      grid grid-flow-row
      place-items-start
      w-full
    "
  >
    <div class="grid grid-flow-col gap-4">
      <NuxtLink exact to="/" class="link link-hover">Moi</NuxtLink>
      <NuxtLink to="skills" class="link link-hover">Compétences</NuxtLink>
      <NuxtLink to="history" class="link link-hover">Parcours</NuxtLink>
      <NuxtLink to="contact" class="link link-hover">Contact</NuxtLink>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://twitter.com/Deathart709" target="_blank">
          <v-icon name="twitter" logo />
        </a>
        <a href="https://github.com/deathart" target="_blank">
          <v-icon name="github-octocat" logo />
        </a>
        <a
          href="https://www.linkedin.com/in/louis-brabant-98b8a814a/"
          target="_blank"
        >
          <v-icon name="linkedin-icon" logo />
        </a>
      </div>
    </div>
    <div>
      <p>Copyright © 2021 - All right reserved by BRABANT Louis</p>
    </div>
  </footer>
</template>

<style lang="css" scoped>
@media (min-width: 48rem) {
  .footer {
    grid-auto-flow: column;
  }
  .footer-center {
    grid-auto-flow: row dense;
  }
}
</style>
