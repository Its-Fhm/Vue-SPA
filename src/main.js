//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
//tell vue to use the router
Vue.use(VueRouter)
//Use Bootstrap Vue
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import the components
import Hello from './components/Hello'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Bounty from './components/Bounty'

//define your routes
const routes = [
  { path: '/', component: Hello },
  { path: '/products', component: Products },
  { path: '/bounty', component: Bounty },
  { path: '/contact', component: Contact },
  { path: '/about', component: About }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app