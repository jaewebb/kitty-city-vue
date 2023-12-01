import { formatDistanceToNow, parseISO } from 'date-fns';

const datefns: any = {
  formatDistanceToNow,
  parseISO
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('datefns', datefns);
});
