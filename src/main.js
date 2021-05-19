import Vue from 'vue';
import dataV from '@jiaminghi/data-view';
import echarts from 'echarts';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'echarts-liquidfill';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(dataV);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
