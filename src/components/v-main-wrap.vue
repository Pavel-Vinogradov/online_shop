<template>
<div class="v-main-wrap">

<v-catalog/>
  <v-cart/>
</div>
</template>

<script>
import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";
export default {
name: "v-main-wrap",
  components: {VCart, VCatalog}
}
</script>
