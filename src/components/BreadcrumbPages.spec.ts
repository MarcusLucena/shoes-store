import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BreadcrumbPages from '@/components/BreadcrumbPages.vue'
import { ElBreadcrumb, ElBreadcrumbItem, ElDivider } from 'element-plus'

describe('BreadcrumbPages.vue', () => {
  it('renders Home breadcrumb item when step is 1', () => {
    const wrapper = mount(BreadcrumbPages, {
      props: { step: 1 },
      global: {
        components: {
          ElBreadcrumb,
          ElBreadcrumbItem,
          ElDivider,
        },
      },
    })

    expect(wrapper.findComponent(ElBreadcrumbItem).exists()).toBe(true)
    expect(wrapper.findComponent(ElBreadcrumbItem).text()).toBe('Home/')
  })

  it('renders Home and Wishlist breadcrumb items when step is 2', () => {
    const wrapper = mount(BreadcrumbPages, {
      props: { step: 2 },
      global: {
        components: {
          ElBreadcrumb,
          ElBreadcrumbItem,
          ElDivider,
        },
      },
    })

    const breadcrumbItems = wrapper.findAllComponents(ElBreadcrumbItem)
    expect(breadcrumbItems.length).toBe(2)
    expect(breadcrumbItems[0].text()).toBe('Home/')
    expect(breadcrumbItems[1].text()).toBe('Wishlist/')
  })
})
