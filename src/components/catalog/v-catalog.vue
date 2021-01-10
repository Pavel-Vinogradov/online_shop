<template>
  <div class="v-catalog">
    <router-link :to="{name:'cart' ,params:{cart_data:getCart}}">
      <div class="v-catalog__link_to_cart">Cart: {{ getCart.length }}</div>
    </router-link>

    <h1>Catalog</h1>
    <v-select
        :options="categories"
        :selected="selected"
        @selectOption="sortByCategories"
    />

    <div class="v-catalog__list">
      <v-catalog-item
          @addToCart="addToCart"
          v-for="item in filteredProducts"
          v-bind:key="item.article"
          v-bind:item="item"/>
    </div>
  </div>

</template>

<script>
import VCatalogItem from "@/components/catalog/v-catalog-item";
import VSelect from "@/components/v-select";

export default {
  name: "v-catalog",
  components: {VSelect, VCatalogItem},
  data() {
    return {
      categories: [
        {name: 'Все', value: 'ALL'},
        {name: 'Мужские', value: 'м'},
        {name: 'Женские', value: 'ж'},
      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
      messages: []
    }
  },
  computed: {
    getProducts() {
      return this.$store.state.products
    },
    getCart() {
      return this.$store.getters.CART
    },
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.$store.getters.PRODUCTS

      }
    },
  },
  methods: {
    addToCart(data) {
      this.$store.commit('setCart', data)
    },
    sortByCategories(category) {
      this.sortedProducts=[]
      let vm = this;
      let temp = this.$store.getters.PRODUCTS;
      temp.map(function (item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }

      })
      this.selected=category.name

    },
    selectOption(item) {
      this.selected = item.name
    }

  },
  mounted() {
    this.$store.dispatch('fetchCategories');

  }
}
</script>

