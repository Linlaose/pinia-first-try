<script>
import cartStore from '@/stores/cartStore.js';

import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  }
}
</script>

<template src="./template.html"></template>