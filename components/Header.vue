<template>
  <header class="flex px-5 bg-white drop-shadow">
    <div class="logo-font self-center">
      <i class="fa-solid fa-building mr-2" />
      <NuxtLink to="/">
        Kitty City
      </NuxtLink>
      <i class="fa-regular fa-building ml-1" />
    </div>
    <nav class="ml-auto self-center">
      <NuxtLink to="/" class="mr-5">
        Home
      </NuxtLink>
      <NuxtLink to="/favorites" class="mr-5">
        Favorites
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
