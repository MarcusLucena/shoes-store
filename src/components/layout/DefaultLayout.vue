<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
</script>

<template>
  <div class="default-layout-container">
    <Header />
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
