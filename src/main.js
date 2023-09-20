/*
 * @Descripttion: 
 * @version: 
 * @Author: G
 * @Date: 2023-09-19 17:43:18
 * @LastEditors: G
 * @LastEditTime: 2023-09-19 19:04:28
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
