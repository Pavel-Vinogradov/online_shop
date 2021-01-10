<template>
  <div class="v-select">
    <p class="title"
       @click="changeOption">{{ selected }}</p>
    <div class="options"
         v-if="areOptionsVisible || isExpanded">
      <p v-bind:key="item.value"
         @click="selectOption(item)"
         v-for="item in options">{{ item.name }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "v-select",
  props: {options: Array, selected: String, isExpanded: Boolean},
  data() {
    return {
      areOptionsVisible: false,
    }
  },
  computed: {},
  methods: {
    selectOption(item) {
      this.$emit('selectOption', item)
      this.areOptionsVisible = false;

    },
    changeOption() {
      this.areOptionsVisible = !this.areOptionsVisible
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }

}
</script>

