// JS
import './js/index.js'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

//Bootstarp 
// import "~bootstrap/scss/bootstrap";
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})

// import $ from "jquery";
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';


