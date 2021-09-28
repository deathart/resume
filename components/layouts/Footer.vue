<template>
  <footer class="p-10 footer bg-base-200 text-base-content footer-center lg:rounded-t-box">
    <div class="grid grid-flow-col gap-4">
      <NuxtLink to="/" class="link link-hover">Compétences</NuxtLink>
      <NuxtLink to="history" class="link link-hover">Parcours</NuxtLink>
      <NuxtLink to="contact" class="link link-hover">Contact</NuxtLink>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://twitter.com/Deathart709" target="_blank">
          <v-icon name="twitter" color="rgb(3, 169, 244)" />
        </a>
        <a href="https://github.com/deathart" target="_blank">
          <v-icon name="github" />
        </a>
        <a href="https://www.linkedin.com/in/louis-brabant-98b8a814a/" target="_blank">
          <v-icon name="linkedin" color="#0a66c2" />
        </a>
      </div>
    </div>
    <div>
      <p>Copyright © 2021 - All right reserved by BRABANT Louis</p>
    </div>
</footer>
</template>
