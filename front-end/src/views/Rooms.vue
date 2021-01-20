<template>
  <div class="rooms-view">
      <Banner/>
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
import Banner from "../components/Banner"
export default {
    name:"Rooms",
    

    components:{
        Room,
        Banner
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
    justify-content: space-around;
    margin-right:25px;
    margin-left:25px
}

</style>