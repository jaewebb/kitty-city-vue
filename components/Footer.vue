<template>
  <footer className="text-center">
    &copy; Jae Webb {{ footerDate }}
  </footer>
</template>

<script setup lang="ts">
const footerDate = new Date().getFullYear();
</script>

<style scoped>

</style>
