<template>
  <div>
    <input type="text" v-model="showData">
    1000 <br>
    <ChildVueCom
      :number='showData'
      @my-event='getMyEvent'
    >
      <p slot="headers">这是个插槽</p>
    </ChildVueCom>
    <keep-alive>
      <div :is="currentView"></div>
    </keep-alive>
  </div>
</template>

<script>
  import ChildVueCom from '@/components/page/testComponent/ChildVueCom'
  import ComA from '@/components/page/testComponent/ComA'
  import ComB from '@/components/page/testComponent/ComB'

  export default {
    name: "FontEnd",
    components: {ChildVueCom, ComA, ComB},
    data() {
      return {
        showData: 12,
        currentView: 'ComA'
      }
    },
    methods: {
      getMyEvent(one) {
        console.log("1" + one)
      }
    }
  }
</script>

<style scoped>

</style>
