import Vue from 'vue' 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import VueParticles from 'vue-particles' 

Vue.use(VueParticles)  //粒子特效
Vue.use(ElementUI)   

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')