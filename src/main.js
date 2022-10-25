import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import * as highcharts from 'highcharts'
Vue.prototype.$echarts = echarts
Vue.prototype.$highcharts = highcharts

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
