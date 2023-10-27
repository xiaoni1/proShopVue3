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
    },
    // 定义show和hide函数，控制当前分类得耳二级分类显示和隐藏
    show (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    hide (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const { result } = await findAllCategory()
      result.forEach(top => {
        top.open = false
      })
      // 修改分类数据
      commit('setList', result)
    }
  }
}