<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
useHead(() => ({
  script: [
    {
      src: 'https://kit.fontawesome.com/aca89374a4.js',
      async: true,
      crossorigin: 'anonymous',
      defer: true
    }
  ]
}));
</script>
