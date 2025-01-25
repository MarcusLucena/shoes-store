<script setup lang="ts"></script>

<template>
  <header class="header-container">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/wishlist">Wishlist</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  width: 100%;
  display: flex;
  min-height: 50px;
  background-color: $default-color;
  color: white;
  padding: 1rem;
}
</style>
