import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockData from './recipes.json'

Vue.config.productionTip = false

const data = {
  recipes: mockData.recipes,
  dialogOpen: false,
  currentRecipe: null
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
