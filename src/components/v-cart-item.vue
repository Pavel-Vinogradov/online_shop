<template>
  <div class='v-cart-item'>
    <img class="v-cart-item__image"
         :src=" require('../assets/img/' + cartItemData.image) "
         alt="">
    <div class="v-cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price }} Р  </p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span class="quantity__tools">
        <button @click="decrementItem" class="quantity__btn">-</button>
      {{ cartItemData.quantity }}
      <button @click="incrementItem" class="quantity__btn">+</button>
      </span>
    </div>
    <button class="btn"
            @click="delFromCart">Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",

  data() {
    return {}
  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1)
  },
  methods: {
    delFromCart() {
      this.$emit('delFromCart')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
  },

  props: {
    cartItemData: Object,
  }
}
</script>

