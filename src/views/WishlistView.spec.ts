import { mount } from '@vue/test-utils'
import WishlistView from '@/views/WishlistView.vue'
import { describe, it, expect } from 'vitest'

describe('WishlistView.vue', () => {
  it('renders the correct content', () => {
    const wrapper = mount(WishlistView)
    expect(wrapper.text()).toContain('Wishlists')
  })
})
