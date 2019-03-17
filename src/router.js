import Router from 'vue-router'
import home from './components/home.vue'
import about from './components/about.vue'
import education from './components/education.vue'
import project from './components/project.vue'
import contact from './components/contact.vue'

const routes = [
  {path: '/', component: home},
  {path: '/about', component: about},
  {path: '/education', component: education},
  {path: '/project', component: project},
  {path: '/contact', component: contact}
]

export const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})