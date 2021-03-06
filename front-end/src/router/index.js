import Vue from 'vue'
import VueRouter from 'vue-router'
import Rooms from "../views/Rooms"
import SingleRoom from "../views/SingleRoom"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/rooms/:id',
    name: 'SingleRoom',
    component: SingleRoom,
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
