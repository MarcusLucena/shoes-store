import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const ParentComponent = { template: '<div>Parent</div>' }

const routes = [
  {
    path: '/',
    component: ParentComponent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('App.vue', () => {
  it('renders RouterView correctly', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.findComponent(ParentComponent).exists()).toBe(true)
  })
})
