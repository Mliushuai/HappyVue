<template>
  <div>
    <el-menu
      :default-active="'1'"
      class="el-menu-demo nav-bar"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link
          :to="{ name : 'homeindex' }"
          style="display: block;text-decoration: none">处理中心
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name : 'aboutus' }" style="display: block;text-decoration: none">消息中心</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="display: block;text-decoration: brown">订单管理</el-menu-item>
    </el-menu>
  </div>

</template>

<script>
  import navData from '@/common/data/data'

  export default {
    name: "NavMenu",
    /**
     * data 实例化数据
     * @returns {{navData: *[]}}
     */
    data(){
      return{
        navData:[]
      }
    },
    /**
     * mounted 钩子函数 实力化时 渲染组件数据
     */
    mounted: function () {
      this.changGet()
      console.log(`navData===>???`, navData)
    },
    /**
     * vue 中函数操作方式
     */
    methods: {
      /**
       * 测试接通mock
       */
      changGet() {
        this.$axios.get('/api/data').then(res => {
          console.log('res===>', res.data.data);
          this.navData =res.data.data
        })
      },
    },
  }
</script>
<style lang="scss" scoped="" type="text/css">
  $nav-color: #F90;
  .nav-bar {
    display: flex;
    $width: 100%;
    width: $width;
    color: $nav-color;
  }
</style>
