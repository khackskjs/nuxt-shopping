import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseURL,
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProducts() {
  return instance.get('/products')
}

function fetchProductsByKeyword(keyword) {
  return instance.get('/products', {
    params: {
      name_like: keyword
    }
  })
}

function fetchCartItems() {
  return instance.get('/carts')
}

function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems, fetchProducts }