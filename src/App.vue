<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerindex></headerindex>
        <navmenu></navmenu>
      </el-header>
      <el-main>
        <div class="content">
          <div>
            <router-view></router-view>
          </div>
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
  import '@/common/style/Reset.css'
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
