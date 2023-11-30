<template>
  <footer>
    <nav className="text-center">
      &copy; Jae Webb {{ footerDate }}
    </nav>
  </footer>
</template>

<script setup lang="ts">
const footerDate = new Date().getFullYear();
</script>

<style scoped>

</style>
