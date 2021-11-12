<template>
  <footer
    class="
      p-10
      bg-gray-300
      dark:bg-base-200
      text-sm
      font-semibold
      gap-y-10 gap-x-4
      text-indigo-700
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
      <NuxtLink
        exact
        to="/"
        class="hover:text-indigo-500 dark:hover:text-indigo-300"
        >Moi</NuxtLink
      >
      <NuxtLink
        to="skills"
        class="group-hover:text-indigo-500 dark:hover:text-indigo-300"
        >Compétences</NuxtLink
      >
      <NuxtLink
        to="history"
        class="hover:text-indigo-500 dark:hover:text-indigo-300"
        >Parcours</NuxtLink
      >
      <NuxtLink
        to="contact"
        class="group-hover:text-indigo-500 dark:group-hover:text-indigo-300"
        >Contact</NuxtLink
      >
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
      <p>
        <strong>Copyright © 2021</strong> - All right reserved by
        <strong>BRABANT Louis</strong>
      </p>
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
