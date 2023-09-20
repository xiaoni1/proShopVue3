/*
 * @Descripttion: 
 * @version: 
 * @Author: G
 * @Date: 2023-09-19 17:43:18
 * @LastEditors: G
 * @LastEditTime: 2023-09-19 18:45:37
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// 路由规则
const routes = [
 
]
// vue2.0  new VueRouter({})  创建路由实例
// vue3.0 createRouter({})  创建路由实例


const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
