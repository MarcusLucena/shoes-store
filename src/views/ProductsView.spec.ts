import { mount } from '@vue/test-utils'
import ProductsView from '@/views/ProductsView.vue'
import { useLazyQuery } from '@vue/apollo-composable'
import { describe, it, beforeEach, vi, expect } from 'vitest'

vi.mock('@vue/apollo-composable', () => ({
  useLazyQuery: vi.fn(),
}))

describe('ProductsView.vue', () => {
  let loadMock: ReturnType<typeof vi.fn>
  let resultMock: { value: unknown }
  let loadingMock: { value: boolean }
  let errorMock: { value: unknown }

  beforeEach(() => {
    loadMock = vi.fn()
    resultMock = { value: null }
    loadingMock = { value: true }
    errorMock = { value: null }

    useLazyQuery.mockReturnValue({
      load: loadMock,
      result: resultMock,
      loading: loadingMock,
      error: errorMock,
    })
  })

  it('displays loading state initially', () => {
    const wrapper = mount(ProductsView)
    expect(wrapper.text()).toContain('Loading...')
  })

  it('displays no products message when product list is empty', async () => {
    resultMock.value = { products: [] }
    loadingMock.value = false

    const wrapper = mount(ProductsView)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('HomeLoading...')
  })
})
