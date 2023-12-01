<template>
  <main class="min-h-screen sm:m-10 m-5">
    <h1>Adopt a Cat</h1>
    <div class="flex">
      <div class="w-1/4">
        <!-- <Sidebar /> -->
      </div>

      <div
        class="
          grid
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1
          xl:gap-7 gap-5
          w-3/4
        "
      >
        <CatCard
          v-for="cat in catList"
          :key="cat.id"
          :kitty="cat"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { useCatStore } from '@/store/cat';

const catStore = useCatStore();

const { catList } = storeToRefs(catStore);

onMounted(() => {
  catStore.getCats();
});
</script>

<style scoped>

</style>
