import 'jquery'
import Vue from 'vue'
import App from './App'

Vue.use(Element) 
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
// $('body').css('background','blue');