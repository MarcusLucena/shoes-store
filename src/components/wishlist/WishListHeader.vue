<script setup lang="ts">
import MaterialSymbolsFavoriteOutline from '@/components/icons/MaterialSymbolsFavoriteOutline.vue'
import MaterialSymbolsFavoriteOutlineBold from '@/components/icons/MaterialSymbolsFavoriteOutlineBold.vue'
import { useWishlistStore } from '@/stores/useWishlistStore.ts'

const store = useWishlistStore()
</script>

<template>
  <div class="wishlist-container">
    <RouterLink to="/wishlist">
      <el-row>
        <MaterialSymbolsFavoriteOutline
          width="32"
          height="32"
          fill="#FFFFFF"
          v-if="store.getItems.length === 0"
        />
        <MaterialSymbolsFavoriteOutlineBold width="32" height="32" fill="#f20305" v-else />
        <i>Wishlist</i>
      </el-row>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.wishlist-container {
  display: flex;
  justify-items: center;
  justify-content: end;
  height: 45px;
  margin-top: 15px;

  a {
    font-size: 0.8rem;
    text-decoration: none;

    div {
      height: 34px;
      line-height: 30px;
      color: #ffffff;

      i {
        margin-left: 5px;
        font-weight: bold;
      }
    }

    :focus {
      outline: none;
    }
  }
}
</style>
