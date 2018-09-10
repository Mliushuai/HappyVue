<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="220px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <homeindex></homeindex>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/config/NavMenu'
import HomeIndex from '@/components/home/HomeIndex'
  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'homeindex':HomeIndex
    }
  }

</script>

<style>

</style>
