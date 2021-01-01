<template>
  <div class="v-catalog-item">
    <img :src="require('../assets/img/'+item.image)"
         :alt="item.image">
    <p> {{ item.name }}</p>
    <p> Цена {{ item.price }} р</p>
    <button @click="sendDataToParent"
            class="v-catalog-item__add_to_cart_btn btn">Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {item: Object},
  computed: {},
  methods: {
    sendDataToParent() {
      this.$emit('sendDataToParent', this.item.article)
    }
  }
}
</script>

