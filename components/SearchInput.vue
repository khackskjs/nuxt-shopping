<template>
  <div class="input-wrapper flex">
    <input
      :value="searchKeyword"
      type="text"
      class="search-input"
      @input="$emit('input', $event.target.value)">
    <button class="btn" type="button" @click="$emit('search', )">Search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
