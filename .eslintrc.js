/*
 * @Descripttion:
 * @version:
 * @Author: G
 * @Date: 2023-09-20 18:59:54
 * @LastEditors: G
 * @LastEditTime: 2023-09-22 15:18:47
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0
  }
}
