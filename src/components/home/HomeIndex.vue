<template>
  <div>
    <ul>
      <li v-for="(item,key) in data">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeIndex",
    data() {
      return {
        data: []
      }
    },
    mounted: function () {
      this.$axios.get('/api/data').then(res => {
        this.data = res.data
        console.log('res===>', res)
      })
    }
  }
</script>

<style>

</style>
