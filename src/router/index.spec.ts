import { describe, it, expect, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import WishlistView from '@/views/WishlistView.vue'
import router from '@/router'

describe('router', () => {
  it('initializes with correct routes', () => {
    const routes = router.getRoutes()
    expect(routes).toHaveLength(3)
    expect(routes[0].path).toBe('/')
    expect(routes[0].children).toHaveLength(0)
    expect(routes[0].name).toBe('products')
    expect(routes[1].path).toBe('/wishlist')
    expect(routes[1].name).toBe('wishlist')
  })

  it('navigates to products view', async () => {
    await router.push('/')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('products')
  })

  it('navigates to wishlist view', async () => {
    await router.push('/wishlist')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('wishlist')
  })
})
