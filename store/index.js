import { fetchCartItems } from '@/api'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: []
})

export const mutations = {
  addCartItem(state, cartItem) {

    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    })
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const response = await fetchCartItems()
    commit('setCartItems', response.data.map(item => ({ ...item, imageUrl: `${item.imageUrl}?random=${Math.random()}` })))
    return response
  },

  async nuxtServerInit(storeContext, nuxtContext) {  // TODO store 를 생성하는 시점에 데이터가 설정 되게 해주는 action 들의 entry 포인트
    // await storeContext.dispatch('FETCH_CART_ITEMS')
  },
}

export const getters = {
  cartItems(state) {
    return state.cartItems
  },
}
