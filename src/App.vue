<template>
  <div id="app">
    <el-container>
      <el-header>
        <navmenu></navmenu>
      </el-header>
      <el-main>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/config/NavMenu'
  import HeaderIndex from '@/components/config/HeaderIndex'
  import FooterIndex from '@/components/config/FooterIndex'
  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'headerindex':HeaderIndex,
      'footerindex': FooterIndex,
    }
  }

</script>

<style>

</style>
