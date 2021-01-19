import Vue from 'vue'
import Vuex from 'vuex'
import Rooms from "./modules/rooms"
import Booked from "./modules/booked"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Rooms,
    Booked,
  }

})
