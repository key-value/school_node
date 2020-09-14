import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import '@/lib/axiosConfig';

Vue.config.productionTip = false;

Vue.use(ElementUI);

import '@/assets/style/reset.scss';
import '@/assets/style/main.scss';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
