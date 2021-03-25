import "jquery"
import "popper.js"
import $ from "jquery"
window.jQuery = $;
window.$ = $

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// JS
import './js/index.js'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})




