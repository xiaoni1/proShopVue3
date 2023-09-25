/*
 * @Descripttion: index
 * @version: 1.0
 * @Author: G
 * @Date: 2023-09-19 17:43:18
 * @LastEditors: G
 * @LastEditTime: 2023-09-22 16:11:45
 */
import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart.js'
import user from './modules/user.js'
import category from './modules/category.js'
// vue2.0 创建仓库 new Vuexs.store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件 ，默认存储在localStorage
  plugins: [
    createPersistedstate({
      // 本地存储名字
      key: 'erabbit-pc-124-state',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
