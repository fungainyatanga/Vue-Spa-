import Vue from 'vue'
import AppLayout from './theme/Layout.vue'



const app = new Vue({
  // render func that return an elementapp
  ...AppLayout
})
// export the variable in json export
export { app }
