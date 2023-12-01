<template>
  <main class="min-h-screen sm:m-10 m-5">
    <div class="flex h-46 px-3 py-2">
      <div>
        <h2>{{ selectedCat.name }}</h2>
        <h4>{{ birthday }} old</h4>
        <h4>{{ selectedCat.gender }}</h4>
      </div>
      <div class="grow text-right">
        <i
          v-if="selectedCat.name == 'Pumpkin'"
          :class="
            selectedCat.name == 'Pumpkin' ?
              'fa-solid fa-heart ml-1 text-2xl text-red-600' :
              'fa-regular fa-heart ml-1 text-2xl text-red-600'
          "
        />
      </div>
    </div>
    <div class="w-100 h-80 relative">
      <NuxtImg
        :alt="`photo of ${selectedCat.name}`"
        class="h-full"
        :src="`/images/${selectedCat.img}`"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { formatDistanceToNow, parseISO } from 'date-fns';

import { useCatStore } from '@/store/cat';

const catStore = useCatStore();
const route = useRoute();
const router = useRouter();

const { selectedCat } = storeToRefs(catStore);

onMounted(async() => {
  await router.isReady();
  catStore.getCatById(Number(route.params.id));
});

const birthday = computed(() => {
  if (selectedCat.value?.birthday) {
    return formatDistanceToNow(
      parseISO(selectedCat.value?.birthday?.toString())
    );
  } else {
    return ''
  }
});
</script>

<style scoped>

</style>
