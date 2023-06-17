<template>
  <div>
    <!-- Nawigacja -->
    <header></header>
    <!-- zawartość strony -->

    <div>
      <slot />
    </div>

    <footer>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Strona domowa</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">O nas</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Produkty</NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.router-link-extract-active {
  color: #12b488;
}
</style>

