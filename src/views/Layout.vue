<!--
 * @Descripttion: layout
 * @version: 1.0
 * @Author: G
 * @Date: 2023-09-22 12:25:05
 * @LastEditors: G
 * @LastEditTime: 2023-10-13 19:15:04
-->
<template>
  <!-- 顶部通栏 -->
  <AppTopbar />
  <!-- 头部组件 -->
  <AppHeader />
 <!-- 内容 -->
  <div class="main">
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import AppTopbar from '@/components/app-topbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { AppTopbar, AppHeader, AppFooter },
  // 获取分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}

</script>

<style lang="less" scoped>

</style>