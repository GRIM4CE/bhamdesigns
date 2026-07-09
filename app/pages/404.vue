<script setup lang="ts">
// Prerendered to real HTML and copied over .output/public/404.html by
// `npm run postgenerate`. Amplify serves it via a rewrite rule:
//   source 404  ->  target /404.html  (status 404)
useSeo({
  title: 'Page not found | Jon Leibham',
  description: 'The page you were looking for could not be found.',
  noIndex: true,
})
</script>

<template>
  <ErrorContent>
    <NuxtLink
      class="error-home"
      to="/"
    >
      Back to home
    </NuxtLink>
  </ErrorContent>
</template>
