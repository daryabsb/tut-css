import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d8c60f2c = () => interopDefault(import('..\\pages\\natours\\index.vue' /* webpackChunkName: "pages_natours_index" */))
const _04ae9c64 = () => interopDefault(import('..\\pages\\temp\\index.vue' /* webpackChunkName: "pages_temp_index" */))
const _29a277b3 = () => interopDefault(import('..\\pages\\temp\\clas2.vue' /* webpackChunkName: "pages_temp_clas2" */))
const _29b08f34 = () => interopDefault(import('..\\pages\\temp\\clas3.vue' /* webpackChunkName: "pages_temp_clas3" */))
const _200d33d3 = () => interopDefault(import('..\\pages\\temp\\clasindex.vue' /* webpackChunkName: "pages_temp_clasindex" */))
const _2f7f52fe = () => interopDefault(import('..\\pages\\temp\\codepenflex.vue' /* webpackChunkName: "pages_temp_codepenflex" */))
const _35671efa = () => interopDefault(import('..\\pages\\temp\\grid.vue' /* webpackChunkName: "pages_temp_grid" */))
const _8ad070bc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/natours",
    component: _d8c60f2c,
    name: "natours"
  }, {
    path: "/temp",
    component: _04ae9c64,
    name: "temp"
  }, {
    path: "/temp/clas2",
    component: _29a277b3,
    name: "temp-clas2"
  }, {
    path: "/temp/clas3",
    component: _29b08f34,
    name: "temp-clas3"
  }, {
    path: "/temp/clasindex",
    component: _200d33d3,
    name: "temp-clasindex"
  }, {
    path: "/temp/codepenflex",
    component: _2f7f52fe,
    name: "temp-codepenflex"
  }, {
    path: "/temp/grid",
    component: _35671efa,
    name: "temp-grid"
  }, {
    path: "/",
    component: _8ad070bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
