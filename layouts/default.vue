<template>
  <div>
    <!-- Nawigacja -->
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex flex-between">
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Strona domowa</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">O nas</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Produkty</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <!-- zawartość strony -->

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-extract-active {
  color: #12b488;
}
</style>

