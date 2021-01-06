<template>

  <div class="v-cart">
    <router-link :to="{name:'catalog'}">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <H1>Cart</H1>
    <p v-if="!cart_data.length">There are no products in cart</p>
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

