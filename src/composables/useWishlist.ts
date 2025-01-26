import { ref, watchEffect } from 'vue'
import type { Product } from '@/domain/models/Product'

const WISHLIST_KEY = 'wishlist'

export function useWishlist() {
  const wishlist = ref<Product[]>([])

  const loadWishlist = () => {
    const storedWishlist = localStorage.getItem(WISHLIST_KEY)
    if (storedWishlist) {
      wishlist.value = JSON.parse(storedWishlist)
    }
  }

  const saveWishlist = () => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist.value))
  }

  const addToWishlist = (product: Product) => {
    if (!wishlist.value.find((item) => item.code === product.code)) {
      wishlist.value.push(product)
      saveWishlist()
    }
  }

  const removeFromWishlist = (productCode: string) => {
    wishlist.value = wishlist.value.filter((item) => item.code !== productCode)
    saveWishlist()
  }

  watchEffect(loadWishlist)

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  }
}
