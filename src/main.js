import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from './store'

Vue.config.productionTip = false

Array.prototype.remove = function(value) {
  var idx = this.indexOf(value);
  if (idx != -1) {
      return this.splice(idx, 1);
  }
  return false;
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
