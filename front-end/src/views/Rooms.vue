<template>
  <div class="rooms-view">
      <h1>Rooms</h1>
      <div class="container-room">
          <div v-for="room in getAllRooms.rooms" :key="room._id">
            <Room v-bind:room="room"/>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import Room from "../components/Room"
export default {
    name:"Rooms",
    

    components:{
        Room
    },

    computed:{
        ...mapGetters(["getAllRooms"])
    },

    methods:{
        ...mapActions(["allRooms"])

    },

    created(){
        this.allRooms()
    }
}
</script>

<style scoped>
.container-room{
    display:flex;
    flex-wrap: wrap;
}

.rooms-view{
    margin-right:25px;
    margin-left:25px
}
</style>