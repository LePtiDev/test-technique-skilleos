import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from '../views/Home.vue'
import Episodes from "@/views/Episodes";
import Locations from "@/views/Locations";
import Characters from  "@/views/Characters"

import Character from "@/views/SingleView/Character";
import Location from "@/views/SingleView/Location";
import Episode from "@/views/SingleView/Episode";

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },


    // List all entities
    {
      path: '/episodes',
      name: 'Episodes',
      component: Episodes
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations
    }
    ,
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    },


    // Single entity
    {
        path: '/characters/:id',
        name: 'Character',
        component: Character
    },
    {
        path: '/locations/:id',
        name: 'Location',
        component: Location
    },
    {
        path: '/episodes/:id',
        name: 'Episode',
        component: Episode
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
