<script>
  import Navbar from './components/Navbar/Index.vue'
  import Cart from './components/Cart/Index.vue'
  import Products from './components/Products/Index.vue'

  export default {
    components: {
      Navbar,
      Cart,
      Products
    }
  }
</script>

<template>
  <Navbar />
  <Cart />
  <Products />
</template>
