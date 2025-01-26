import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useWishlistStore } from '@/stores/useWishlistStore'
import type { Product } from '@/domain/models/Product'

describe('useWishlistStore', () => {
  let store: ReturnType<typeof useWishlistStore>
  const product: Product = {
    code: '1',
    name: 'Product 1',
    available: true,
    visible: true,
    details: {
      name: 'Product 1',
      description: 'Description of Product 1',
    },
    fullPriceInCents: 1000,
    salePriceInCents: 800,
    rating: 4.5,
    image: 'https://example.com/product1.jpg',
    stockAvailable: 0,
  }

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useWishlistStore()
    store.$patch({ items: [] })
  })

  it('initializes with items from localStorage', () => {
    expect(store.items).toEqual([])
  })

  it('adds an item to the wishlist', () => {
    store.addItem(product)
    expect(store.items).toContainEqual(product)
  })

  it('removes an item from the wishlist', () => {
    store.addItem(product)
    store.removeItem(product.code)
    expect(store.items).not.toContainEqual(product)
  })

  it('toggles an item in the wishlist', () => {
    store.toggleItem(product)
    expect(store.items).toContainEqual(product)
    store.toggleItem(product)
    expect(store.items).not.toContainEqual(product)
  })
})
