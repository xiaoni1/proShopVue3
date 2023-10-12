<!--
 * @Descripttion: layout
 * @version: 1.0
 * @Author: G
 * @Date: 2023-09-22 12:25:05
 * @LastEditors: G
 * @LastEditTime: 2023-10-11 19:15:54
-->
<template>
  <AppTopbar />
  <AppHeader />
  <nav>顶部通栏</nav>
  <header>头部</header>
  <div class="main">
    <RouterView />
  </div>
  <footer>底部</footer>
</template>

<script>
import AppTopbar from '@/components/app-topbar.vue'
import AppHeader from '@/components/app-header.vue'

export default {
  name: 'Layout',
  components: { AppTopbar, AppHeader }
}
</script>

<style lang="less" scoped>

</style>