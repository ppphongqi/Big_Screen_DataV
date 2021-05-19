import Vue from 'vue';
import dataV from '@jiaminghi/data-view';
import echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import 'echarts-liquidfill';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(dataV);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
