import { defineStore } from 'pinia'
import type { Product } from '@/domain/models/Product'

const STORAGE_KEY = 'wishlist'

const saveToLocalStorage = (items: Product[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const loadFromLocalStorage = (): Product[] => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: loadFromLocalStorage() as Product[],
  }),
  getters: {
    getItems: (state) => state.items,
  },
  actions: {
    addItem(item: Product) {
      if (!this.items.some((i) => i.code === item.code)) {
        this.items.push(item)
        saveToLocalStorage(this.items)
      }
    },
    removeItem(code: string) {
      const filterItems = this.items.filter((item) => item.code !== code)
      this.items = filterItems
      saveToLocalStorage(this.items)
    },
    toggleItem(item: Product) {
      if (this.items.some((i) => i.code === item.code)) {
        this.removeItem(item.code)
      } else {
        this.addItem(item)
      }
    },
    clearWishlist() {
      const items = [] as Product[]
      saveToLocalStorage(items)
    },
  },
})
