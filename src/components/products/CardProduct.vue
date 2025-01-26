<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { Product } from '@/domain/models/Product'
import MaterialSymbolsFavoriteOutline from '@/components/icons/MaterialSymbolsFavoriteOutline.vue'
import { useWishlistStore } from '@/stores/useWishlistStore.ts'
import { useRoute } from 'vue-router'
import { CloseBold } from '@element-plus/icons-vue'

const props = defineProps({
  product: [Object as () => Product, { required: true }],
})
const store = useWishlistStore()
const route = useRoute()

const localProduct = ref({ ...props.product })
</script>

<template>
  <el-card style="max-width: 225px">
    <div class="button-add-cart">
      <el-button
        :type="store.getItems.some((item) => item.code === product.code) ? 'danger' : 'info'"
        circle
        @click="store.toggleItem(product)"
        v-if="route.path === '/'"
      >
        <MaterialSymbolsFavoriteOutline width="30" height="30" fill="#FFFFFF" />
      </el-button>
      <el-button
        circle
        :icon="CloseBold"
        type="button.type"
        link
        v-else
        @click.prevent="store.removeItem(localProduct.code)"
      >
      </el-button>
    </div>
    <el-image :src="localProduct.image" lazy fit="contain" />
    <div style="text-align: left">
      <div>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="localProduct.name"
          placement="top-start"
        >
          <span class="product-description">
            {{
              localProduct.name.length > 48
                ? localProduct.name.slice(0, 48) + '...'
                : localProduct.name
            }}
          </span>
        </el-tooltip>
      </div>
      <div>
        <el-rate v-model="localProduct.rating" disabled show-score text-color="#999999" />
      </div>
      <div class="product-old-price">
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            localProduct.fullPriceInCents / 100,
          )
        }}
      </div>
      <div class="product-price">
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            localProduct.salePriceInCents / 100,
          )
        }}
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.button-add-cart {
  margin-left: 160px;
  position: absolute;
  z-index: 1;
}
.product-description {
  font-family: 'source-sans-pro-regular', sans-serif;
  font-size: 14px;
  color: #666666;
}
.product-old-price {
  text-decoration: line-through;
  color: #888888;
  font-size: 12px;
  font-family: 'source-sans-pro-regular', sans-serif;
}
.product-price {
  font-size: 16px;
  font-family: 'source-sans-pro-semibold', sans-serif;
  color: $default-color;
}
</style>
