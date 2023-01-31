<script>
import cartStore from '@/stores/cartStore.js';

import { mapState, mapActions } from 'pinia';

  export default {
    computed: {
      ...mapState(cartStore, ['cartList'])
    },
    methods: {
      ...mapActions(cartStore, ['removeCartItem', 'setCartCount'])
    }
  }
</script>

<template src="./template.html">
</template>

<style scoped src="./styles.css"></style>