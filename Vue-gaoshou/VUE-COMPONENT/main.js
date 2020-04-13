import Vue from 'vue'
import App from './App'
const vm = new Vue({// eslint-disable-line no-unused-vars
    el:'#app',
    render:h=>h(App)
})
//组件间通信
//构建 通信组件