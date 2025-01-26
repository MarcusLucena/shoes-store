import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import CardProduct from '@/components/products/CardProduct.vue'
import { createTestingPinia } from '@pinia/testing'
import { useWishlistStore } from '@/stores/useWishlistStore'
import type { Product } from '@/domain/models/Product'
import MaterialSymbolsFavoriteOutline from '@/components/icons/MaterialSymbolsFavoriteOutline.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setActivePinia } from 'pinia'

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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/wishlist', component: { template: '<div>Wishlist</div>' } },
  ],
})

describe('CardProduct.vue', () => {
  let store: ReturnType<typeof useWishlistStore>

  beforeEach(() => {
    setActivePinia(createTestingPinia())
    store = useWishlistStore()
    store.$patch({ items: [product] })
  })

  it('renders product details correctly', () => {
    const wrapper = mount(CardProduct, {
      props: { product },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(wrapper.find('.product-description').text()).toBe(product.name)
    expect(wrapper.find('.product-old-price').text()).toBe('R$ 10,00')
    expect(wrapper.find('.product-price').text()).toBe('R$ 8,00')
  })

  it('adds product to wishlist when favorite button is clicked', async () => {
    const wrapper = mount(CardProduct, {
      props: { product },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    await wrapper.findComponent(MaterialSymbolsFavoriteOutline).trigger('click')
    expect(store.items).toContainEqual(product)
  })

  it('removes product from wishlist when remove button is clicked', async () => {
    store.addItem(product)
    await router.push('/wishlist')
    const wrapper = mount(CardProduct, {
      props: { product },
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    const button = wrapper.find('#remove-product')
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    expect(store.items).not.toContainEqual([product])
  })
})
