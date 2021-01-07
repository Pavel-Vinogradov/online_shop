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
        @increment="increment(index)"
        @decrement="decrement(index)"
        v-bind:key="item.article"
        v-bind:cart-item-data="item"/>
    <div class="v-cart__total">
      <p>Total</p>
      <p> {{ cartTotalCost }} Р</p>
    </div>
  </div>
</template>
<script>
import VCartItem from "@/components/cart/v-cart-item";
export default {
  name: "v-cart",
  components: {VCartItem},
  props: {cart_data: Array,},
  methods: {
    delFromCart(index) {
      this.$store.commit('removeToCart', index)
    },
    increment(index) {
      this.$store.commit('increment', index)
    },
    decrement(index) {
      this.$store.commit('decrement', index)
    },
  },
  computed: {
    cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }
  }
}
</script>

