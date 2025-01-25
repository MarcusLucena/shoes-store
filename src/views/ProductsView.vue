<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCTS_QUERY } from '@/data/queries/productQueries'
import type { Product } from '@/domain/models/Product'

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
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.code">
        {{ product.name }} - {{ product.fullPriceInCents }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
