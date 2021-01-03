<template>
  <div class="v-catalog__list">
    <v-catalog-item
        @addToCart="addToCart"
        v-for="item in getProducts"
        v-bind:key="item.article"
        v-bind:item="item"/>
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

  },
  methods: {
    addToCart(data) {
       this.$store.commit('setCart',data)

    }
  },
  mounted() {
    this.$store.dispatch('fetchCategories');

  }
}
</script>

