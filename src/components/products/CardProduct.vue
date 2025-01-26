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
  <el-card style="max-width: 260px" class="card-container">
    <div class="button-add-cart">
      <el-button
        :color="store.getItems.some((item) => item.code === product.code) ? '#f20305' : '#8d8d8d'"
        circle
        @click="store.toggleItem(product)"
        v-if="route.path === '/'"
      >
        <MaterialSymbolsFavoriteOutline width="30" height="30" fill="#FFFFFF" />
      </el-button>
      <el-button
        circle
        :icon="CloseBold"
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
              localProduct.name.length > 50
                ? localProduct.name.slice(0, 52) + '...'
                : localProduct.name
            }}
          </span>
        </el-tooltip>
      </div>
      <div>
        <el-rate
          v-model="localProduct.rating"
          disabled
          show-score
          text-color="#666666"
          class="custom-rate"
        />
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
.card-container {
  margin: 15px auto;
  -webkit-box-shadow: 3px 1px 6px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 1px 6px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 3px 1px 6px 0 rgba(0, 0, 0, 0.75);

  .button-add-cart {
    margin-top: -14px;
    margin-left: 200px;
    position: absolute;
    z-index: 1;
  }
  .product-description {
    font-size: 16px;
    font-family: 'source-sans-pro-semibold', sans-serif;
    color: #666666;
    width: 100%;
    min-height: 40px;
    display: flex;
    margin-top: 10px;
  }
  .product-old-price {
    font-size: 14px;
    font-family: 'source-sans-pro-semibold', sans-serif;
    text-decoration: line-through;
    color: #666666;
    margin-top: 10px;
  }
  .product-price {
    font-size: 22px;
    font-family: 'source-sans-pro-bold', sans-serif;
    color: $default-color;
  }

  .custom-rate {
    font-weight: bold;
  }
}
</style>
