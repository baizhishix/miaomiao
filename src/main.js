import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import Scroller from '@/components/Scroller'
import loader from '@/components/Loading'

Vue.component('Scroller', Scroller);
Vue.component('loader', loader);

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH', (url, arg) => {
  // if(url === undefined) { return }
  return url.replace(/w\.h/, arg);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
