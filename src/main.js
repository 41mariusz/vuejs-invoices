import Vue from 'vue'
import App from './App.vue'
// import RandomChart from './RandomChart.vue'
import axios from 'axios'

const base = axios.create({
  baseURL: 'http://localhost/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.prototype.$http = base

new Vue({
  el: '#app',
  render: h => h(App)
})
