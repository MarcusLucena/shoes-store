import { describe, it, expect, vi } from 'vitest'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ElementPlus from 'element-plus'
import router from '@/router'
import { apolloClient } from '@/infra/apollo-client'
import App from '@/App.vue'

// Mock the dependencies
vi.mock('@/infra/apollo-client', () => ({
  apolloClient: { mock: 'ApolloClientMock' },
}))
vi.mock('@/router', () => ({
  default: {
    isRouterMock: true,
    install: vi.fn(),
  },
}))

describe('main.ts', () => {
  it('initializes the app with the correct plugins and configurations', () => {
    const app = createApp(App)

    // Mock provide function
    const provideSpy = vi.spyOn(app, 'provide')

    // Add plugins
    app.use(createPinia())
    app.use(router)
    app.use(ElementPlus)

    // Provide Apollo Client
    app.provide(DefaultApolloClient, apolloClient)

    // Mount point
    const mountSpy = vi.spyOn(app, 'mount').mockImplementation(vi.fn())

    // Assertions
    expect(provideSpy).toHaveBeenCalledWith(DefaultApolloClient, { mock: 'ApolloClientMock' })
    expect(app.config.globalProperties.$pinia).toBeDefined()

    // Verify mount
    app.mount('#app')
    expect(mountSpy).toHaveBeenCalledWith('#app')
  })

  it('throws error if Apollo Client is not provided', () => {
    const app = createApp(App)
    expect(() => {
      app.provide(DefaultApolloClient, undefined)
    })
  })

  it('throws error if router is not provided', () => {
    const app = createApp(App)
    expect(() => {
      app.use(undefined)
    })
  })

  it('throws error if ElementPlus is not provided', () => {
    const app = createApp(App)
    expect(() => {
      app.use(undefined)
    })
  })

  it('mounts the app to the correct DOM element', () => {
    const app = createApp(App)
    const mountSpy = vi.spyOn(app, 'mount').mockImplementation(vi.fn())
    app.mount('#app')
    expect(mountSpy).toHaveBeenCalledWith('#app')
  })
})
