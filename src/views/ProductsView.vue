<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCTS_QUERY } from '@/data/queries/productQueries'
import type { Product } from '@/domain/models/Product'
import BreadcrumbPages from '@/components/BreadcrumbPages.vue'
import CardProduct from '@/components/products/CardProduct.vue'

const { result, loading, error } = useQuery<{ products: Product[] }>(PRODUCTS_QUERY)
const products = ref<Product[]>([])

watch(result, (newResult) => {
  if (newResult) {
    products.value = newResult.products
  }
})
</script>

<template>
  <div>
    <BreadcrumbPages :step="1" />
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="products.length" class="cards-container">
      <div v-for="product in products" :key="product.code">
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
