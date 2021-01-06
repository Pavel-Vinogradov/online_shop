<template>
  <div class="v-main-wrap">
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: "v-main-wrap",
  methods: {},
  computed: {
    getItemCart() {
      return this.$store.state.cart
    }
  },


}
</script>
