<script>
import cartStore from '@/stores/cartStore.js'
import productsStore from '@/stores/productsStore.js'
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(productsStore, ['sortProduct'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>

<template src="./template.html"></template>

<style scoped src="./styles.css"></style>