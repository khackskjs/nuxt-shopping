<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList />
    <div>
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '~/components/CartList.vue'
export default {
  name: 'CartPage',
  components: { CartList },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
</style>
