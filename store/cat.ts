import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Ref } from 'vue';
import type { Cat } from '@/interfaces/Cat';

export const useCatStore = defineStore('cat', () => {
  const catList: Ref<Array<Cat>> = ref([]);
  const selectedCat: Ref<Cat> = ref({} as Cat);

  async function getCats() {
    const { data, error } =
      await useFetch<Cat[]>('/api/cats');
    if (!error.value && data.value) {
      catList.value = data.value;
    }
  }

  async function getCatById(id: number) {
    const { data, error } =
      await useFetch<Cat>(`/api/cat/${id}`, { method: 'get' });
    if (!error.value && data.value) {
      selectedCat.value = data.value;
    }
  }

  return {
    catList,
    selectedCat,

    getCatById,
    getCats
  };
});
