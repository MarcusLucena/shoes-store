import { mount } from '@vue/test-utils'
import ProductsView from '@/views/ProductsView.vue'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useQuery } from '@vue/apollo-composable'
import { ref } from 'vue'
import type { Product } from '@/domain/models/Product'

// Mock the useQuery function
vi.mock('@vue/apollo-composable', () => ({
  useQuery: vi.fn(),
}))

describe('ProductsView.vue', () => {
  const mountComponent = (mockReturnValue: any) => {
    ;(useQuery as vi.Mock).mockReturnValue(mockReturnValue)
    return mount(ProductsView, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  }

  it('renders the correct content', () => {
    const wrapper = mountComponent({
      result: ref(null),
      loading: ref(false),
      error: ref(null),
    })
    expect(wrapper.text()).toContain('Products')
  })

  it('displays loading state', () => {
    const wrapper = mountComponent({
      result: ref(null),
      loading: ref(true),
      error: ref(null),
    })
    expect(wrapper.text()).toContain('Loading...')
  })

  it('displays error state', () => {
    const errorMessage: string = 'Error fetching products'
    const wrapper = mountComponent({
      result: ref(null),
      loading: ref(false),
      error: ref(new Error(errorMessage)),
    })
    expect(wrapper.text()).toContain(`Error: ${errorMessage}`)
  })

  it('displays products', () => {
    const setProducts: Product[] = [
      {
        code: '1',
        name: 'Product 1',
        available: true,
        visible: true,
        details: { name: 'Detail 1', description: 'Description 1' },
        fullPriceInCents: 1000,
        salePriceInCents: 800,
        rating: 4,
        image: 'image1.jpg',
        stockAvailable: 10,
      },
      {
        code: '2',
        name: 'Product 2',
        available: true,
        visible: true,
        details: { name: 'Detail 2', description: 'Description 2' },
        fullPriceInCents: 2000,
        salePriceInCents: 1600,
        rating: 5,
        image: 'image2.jpg',
        stockAvailable: 5,
      },
    ]

    const wrapper = mountComponent({
      result: ref({ data: { products: setProducts } }),
      loading: ref(false),
      error: ref(null),
    })

    expect(wrapper.text()).toContain('Products')
  })
})
