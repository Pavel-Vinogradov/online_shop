<template>
<div class="v-catalog-item">
  <img :src="require('../assets/img/'+item.image)"
       :alt="item.image">
  <p> {{item.article}}</p>
  <p> Цена {{item.price}} р</p>
  <button class="btn">Add to cart</button>
</div>
</template>

<script>
export default {
name: "v-catalog-item",
  props:{item:Object},
}
</script>

