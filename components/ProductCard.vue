<template>
  <div>
    <div class="card text-center">
      <img :src="product.image" class="thumb" alt="miniaturka">
      <p class="font-bold text-gray-500 m-4 trumcate"> {{product.title}}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">Szczegóły</p>
      </NuxtLink>
      
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style scoped>

</style>