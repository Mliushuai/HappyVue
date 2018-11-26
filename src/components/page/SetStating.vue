<template>
  <div>
    <div>总价合计：{{totalPrice}}</div>
    <Apple></Apple>
    <Banana></Banana>
    <TabCard></TabCard>
  </div>
</template>

<script>
  import Apple from '@/components/shopCar/Apple'
  import Banana from '@/components/shopCar/Banana'
  import TabCard from '@/components/shopCar/TabCar'

  export default {
    components: {Apple, Banana, TabCard},
    name: "SetStating",
    computed: {
      totalPrice() {
        return this.$store.state.totalPrice
      }
    },
  }
</script>

<style scoped>

</style>
