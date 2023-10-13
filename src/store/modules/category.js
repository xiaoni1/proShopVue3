import { topCategory } from '@/api/constans'
import { findAllCategory } from '@/api/category'
// 分类列表
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合，依赖topCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}