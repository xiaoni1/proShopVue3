/*
 * @Descripttion: 接口
 * @version: 1.0
 * @Author: G
 * @Date: 2023-10-13 15:58:27
 * @LastEditors: G
 * @LastEditTime: 2023-10-13 18:59:13
 */
// 定义分类相关的API接口函数
import request from '@/utils/request'

/**
 * 获取所有分类 (顶级，二级，对应的商品推荐数据)
 *  @return Promise
*/

export const findAllCategory = () => {
  return request('home/category/head', 'get')
}