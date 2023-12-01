<template>
  <NuxtLink :to="`cat/${kitty.id}`">
    <div class="drop-shadow-xl bg-white max-w-md">
      <div class="flex h-46 px-3 py-2">
        <div>
          <h2>{{ kitty.name }}</h2>
          <h4>{{ birthday }} old</h4>
          <h4>{{ kitty.gender }}</h4>
        </div>
        <div class="grow text-right">
          <i
            v-if="kitty.name == 'Pumpkin'"
            :class="
              kitty.name == 'Pumpkin' ?
                'fa-solid fa-heart ml-1 text-2xl text-red-600' :
                'fa-regular fa-heart ml-1 text-2xl text-red-600'
            "
          />
        </div>
      </div>
      <div class="w-100 h-80 relative">
        <NuxtImg
          :alt="`photo of ${kitty.name}`"
          class="mx-auto"
          :src="`/images/${kitty.img}`"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { formatDistanceToNow, parseISO } from 'date-fns';

import type { Cat } from '@/interfaces/Cat';

const props = defineProps<{
  kitty: Cat
}>();

const birthday = computed(() => {
  return formatDistanceToNow(parseISO(props.kitty?.birthday?.toString()));
});
</script>

<style scoped>

</style>
