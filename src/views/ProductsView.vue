<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import BreadcrumbPages from '@/components/BreadcrumbPages.vue'
import CardProduct from '@/components/products/CardProduct.vue'
import { useLazyQuery } from '@vue/apollo-composable'
import type { Product } from '@/domain/models/Product.ts'
import { PRODUCTS_QUERY } from '@/data/queries/productQueries.ts'

const products = reactive<Product[]>([])
const loading = reactive({ value: true })
const error = reactive({ value: '' })

const {
  load,
  result,
  loading: queryLoading,
  error: queryError,
} = useLazyQuery<{ products: Product[] }>(PRODUCTS_QUERY)

onMounted(() => {
  load()
})

watch(result, (newResult) => {
  if (newResult) {
    products.splice(0, products.length, ...newResult.products)
    loading.value = false
  }
})

watch(queryLoading, (newLoading) => {
  loading.value = newLoading
})

watch(queryError, (newError) => {
  if (newError) {
    error.value = newError.message ? newError.message : ''
    loading.value = false
  }
})
</script>

<template>
  <div>
    <BreadcrumbPages :step="1" />
    <div v-if="loading.value">Loading...</div>
    <div v-if="error.value">Error: {{ error.value }}</div>
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
