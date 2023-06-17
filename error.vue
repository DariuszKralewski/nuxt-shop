<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
    <p class="mt-7 text-2xl font-bold">{{error.message}}</p>
    <p class="mt-7 text-xl">{{error.description}}</p>
    
  </div>
</template>

<script setup>
defineProps(['error'])

</script>

<style scoped>

</style>