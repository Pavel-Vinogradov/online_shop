<template>
  <div class='v-cart-item'>
    <img class="v-cart-item__image"
         :src=" require('../assets/img/' + cartItemData.image) "
         alt="">
    <div class="v-cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>cartItemData.price }}</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span class="quantity__tools">
        <span class="quantity__btn">-</span>
      {{ cartItemData.quantity }}
      <span class="quantity__btn ">+</span>
      </span>
    </div>
    <button class="btn" @click="delFromCart">Delete</button>
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
    }
  },

  props: {
    cartItemData: Object,
  }
}
</script>

