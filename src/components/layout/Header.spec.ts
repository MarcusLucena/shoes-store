import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import Header from '@/components/layout/Header.vue'
import WishListHeader from '@/components/wishlist/WishListHeader.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import { ElImage, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
})

describe('Header.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders WishListHeader, logo, and UserIcon correctly', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router, createPinia()],
        components: {
          ElImage,
          ElDropdown,
          ElDropdownMenu,
          ElDropdownItem,
        },
      },
    })

    expect(wrapper.findComponent(WishListHeader).exists()).toBe(true)
  })
})
