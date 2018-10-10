<template>
  <div>
    <button @click="addOne">加一个苹果</button>
    <button @click="minusOne">减一个苹果</button>
    <span>价格</span>
  </div>
</template>

<script>
  export default {
    name: "Apple",
    data() {
      return {
        price: 5
      }
    },
    methods: {
      addOne() {
        this.$store.commit('increment',this.price)
      },
      minusOne() {
        this.$store.commit('decrement',this.price)
      }
    }
  }
</script>

<style scoped>

</style>
