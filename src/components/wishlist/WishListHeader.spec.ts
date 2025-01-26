import { mount } from '@vue/test-utils'
import WishListHeader from '@/components/wishlist/WishListHeader.vue'
import { describe, it, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useWishlistStore } from '@/stores/useWishlistStore'

describe('WishListHeader.vue', () => {
  it('renders the correct icon when wishlist is empty', () => {
    const wrapper = mount(WishListHeader, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    const store = useWishlistStore()
    store.$patch({ items: [] })
    expect(wrapper.findComponent({ name: 'MaterialSymbolsFavoriteOutline' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'MaterialSymbolsFavoriteOutlineBold' }).exists()).toBe(
      false,
    )
  })
})
