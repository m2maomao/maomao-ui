import Vue from 'vue';
import App from './index.vue';
import Maomaoui from '../package/maomaoui';
Vue.use(Maomaoui);

new Vue({
  render: h => h(App)
}).$mount('#app')