import Vue from 'vue' 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.use(ElementUI)   //新添加3
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')