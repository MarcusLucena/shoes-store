import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import WishlistView from '@/views/WishlistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'products',
          component: ProductsView,
        },
        {
          path: '/wishlist',
          name: 'wishlist',
          component: WishlistView,
        },
      ],
    },
  ],
})

export default router
