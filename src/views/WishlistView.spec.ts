import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import WishlistView from '@/views/WishlistView.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useWishlistStore } from '@/stores/useWishlistStore'
import { ElCard, ElImage } from 'element-plus'
import type { Product } from '@/domain/models/Product.ts'
import { createTestingPinia } from '@pinia/testing'

describe('WishlistView.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders wishlist products correctly', async () => {
    const wishlistProducts = [
      {
        code: 'D22-2077-006',
        name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
        available: true,
        visible: true,
        details: {
          name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
          description:
            'Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortvel quando a borracha encontra a estrada e performtico para o ritmo desejado, uma evoluo de um favorito dos fs que oferece uma conduo macia e suave.',
        },
        fullPriceInCents: 39999,
        salePriceInCents: 30399,
        rating: 4.5,
        image:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x',
        stockAvailable: 1,
      },
      {
        code: 'NQQ-4378-028',
        name: 'Bola de Futebol Society Penalty 8 X - Branco+Verde Limão',
        available: true,
        visible: true,
        details: {
          name: 'Bola de Futebol Society Penalty 8 X - Branco+Verde Limão',
          description:
            'Junte os amigos e desenvolva suas melhores jogadas com a Bola de Futebol Society da Penalty. Fabricada com material resistente, o modelo recebe uma dupla camada de colagem, reforçando ainda mais a junção dos gomos e garantindo a vida útil da bola por muito mais tempo.As cores contrastantes ajudam na visualização dentro das quatro linhas. Seja o melhor do jogo e domine o adversário com a Penalty. Garanta já a sua!',
        },
        fullPriceInCents: 22000,
        salePriceInCents: 17499,
        rating: 4,
        image:
          'https://static.netshoes.com.br/produtos/bola-de-futebol-society-penalty-8-x/78/D23-5694-078/D23-5694-078_zoom1.jpg?ts=1695700132?ims=544x',
        stockAvailable: 1,
      },
    ]

    const wrapper = mount(WishlistView, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              items: wishlistProducts,
            },
            stubActions: true,
          }),
        ],
        components: {
          ElCard,
          ElImage,
        },
      },
    })

    const store = useWishlistStore()

    await wrapper.vm.$nextTick()

    const productCards = wrapper.findAllComponents(ElCard)
    expect(productCards.length).toBe(store.items.length)

    store.items.forEach((product, index) => {
      const productCard = productCards[index]
      expect(productCard.text()).toContain(product.name)
      expect(productCard.text()).toContain(product.details.description)
      expect(productCard.find('img').attributes('src')).toBe(product.image)
    })
  })
})
