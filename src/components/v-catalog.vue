<template>
  <div class="v-catalog">
 <router-link :to="{name:'cart' ,params:{cart_data:getCart}}">
   <div class="v-catalog__link_to_cart">Cart: {{ getCart.length }}</div>
 </router-link>

    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
          @addToCart="addToCart"
          v-for="item in getProducts"
          v-bind:key="item.article"
          v-bind:item="item"/>
    </div>
  </div>

</template>

<script>
import VCatalogItem from "@/components/v-catalog-item";

export default {
  name: "v-catalog",
  components: {VCatalogItem},
  data() {
    return {}
  },
  computed: {
    getProducts() {
      return this.$store.state.products
    },
    getCart() {
      return this.$store.getters.CART
    },
  },
  methods: {
    addToCart(data) {
      this.$store.commit('setCart', data)

    }
  },
  mounted() {
    this.$store.dispatch('fetchCategories');

  }
}
</script>

