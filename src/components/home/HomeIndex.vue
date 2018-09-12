<template>
  <div>
    <div class="content">
      <router-view></router-view>
    </div>
    <ul>
      <li v-for="(item,key) in data">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeIndex",
    data() {
      return {
        data: [],
      }
    },
    mounted: function () {
      this.changGet();
      this.changePost();
    },
    methods: {
      /**
       * 测试接通mock
       */
      changGet() {
        this.$axios.get('/api/data').then(res => {
          console.log('res===>', res);
          this.data = res.data
        })
      },
      /**
       * 测试Mock post
       */
      changePost() {
        this.$axios.post('/api/post').then(res => {
          console.log(`mockPost ===> `, res)
        })
      }
    },

  }
</script>

<style>

</style>
