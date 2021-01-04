<template>

  <div class="v-cart">
    <v-cart-item
        v-for="(item,index) in cart_data"
        @delFromCart="delFromCart(index)"
        v-bind:key="item.article"
        v-bind:cart-item-data="item"/>

  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item";

export default {
  name: "v-cart",
  components: {VCartItem},
  props: {cart_data: Array,},
  methods: {
    delFromCart(index) {
      this.$store.commit('removeToCart', index)

    }
  },

}
</script>

