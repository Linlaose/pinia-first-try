import productsStore from '@/stores/productsStore.js';

import { defineStore } from 'pinia';

export default defineStore('cartStore', {
  state: () => ({
    cart: []
  }),
  getters: {
    cartList: ({ cart }) => {
      const { products } = productsStore();

      const carts = cart.map((item) => {
        const product = products.find((product) => product.id === item.productId)

        return {
          ...item,
          product,
          subtotal: product.price * item.qty
        }
      })

      const total = carts.reduce((a, b) => {
        return a + b.subtotal
      }, 0);

      return {
        carts,
        total
      }
    }
  },
  actions: {
    addToCart(productId, qty = 1) {
      const currentCart = this.cart.find((item) => item.productId === productId)

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          productId,
          id: new Date().getTime(),
          qty
        })
      }
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => id === item.id)
      this.cart.splice(index, 1)
    },
    setCartCount(id, event) {
      const product = this.cart.find((item) => item.id === id);
      product.qty = parseInt(event.target.value);
    }
  }
})