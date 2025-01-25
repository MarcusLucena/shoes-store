import { mount } from '@vue/test-utils'
import ProductsView from '@/views/ProductsView.vue'
import { describe, it, expect } from 'vitest'

describe('ProductsView.vue', () => {
  it('renders the correct content', () => {
    const wrapper = mount(ProductsView)
    expect(wrapper.text()).toContain('Products')
  })
})
