import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import Header from '@/components/layout/Header.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
})

describe('DefaultLayout.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders Header and RouterView correctly', () => {
    const wrapper = mount(DefaultLayout, {
      global: {
        plugins: [router, createPinia()],
      },
    })

    expect(wrapper.findComponent(Header).exists()).toBe(true)
    expect(wrapper.find('main.container').exists()).toBe(true)
  })
})
