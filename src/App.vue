<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerindex></headerindex>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <homeindex></homeindex>
        </el-main>
      </el-container>
      <el-footer>
        <footerindex></footerindex>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/config/NavMenu'
  import HomeIndex from '@/components/home/HomeIndex'
  import HeaderIndex from '@/components/config/HeaderIndex'
  import FooterIndex from '@/components/config/FooterIndex'
  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'homeindex': HomeIndex,
      'headerindex':HeaderIndex,
      'footerindex': FooterIndex,

    }
  }

</script>

<style>

</style>
