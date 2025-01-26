<script setup lang="ts">
import BreadcrumbPages from '@/components/BreadcrumbPages.vue'
import CardProduct from '@/components/products/CardProduct.vue'
import { useWishlistStore } from '@/stores/useWishlistStore.ts'

const store = useWishlistStore()
</script>

<template>
  <div>
    <BreadcrumbPages :step="2" />
    <div v-if="store.getItems.length" class="cards-container">
      <div v-for="product in store.getItems" :key="product.code">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 6px;
}
</style>
