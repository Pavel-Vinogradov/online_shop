<template>
  <div class="v-main-wrap">

    <v-catalog/>
    <v-cart v-if="this.$store.getters.CART.length"
            v-bind:cart_data="getItemCart"/>
  </div>
</template>

<script>
import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";

export default {
  name: "v-main-wrap",
  components: {VCart, VCatalog},
  methods: {},
  computed: {
    getItemCart() {
      return this.$store.state.cart
    }
  },


}
</script>
