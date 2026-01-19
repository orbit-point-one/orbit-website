import type { UseFetchOptions } from "nuxt/app";

export const useMutation = <T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) =>
  useFetch(url, {
    method: "POST",
    ...options,
    server: false,
    immediate: false,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
