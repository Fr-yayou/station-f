<template>
  <div class="container-cardRoom">
      <h5>{{room.name}}</h5>
      <p>{{room.description}}</p>
      <p>{{room.capacity}}</p>
      <div class="container-equipements">
          <div class="room-equipements" v-if="room.equipements.length == 0">
              <p class="equipements-none">No equipement</p>
          </div>
          <div class="room-equipements" v-else v-for="gear in room.equipements" :key="gear._id">
              <img v-if="gear.name == tv" :src="iconTv" alt="tv"/> 
              <img  v-else-if="gear.name == retro" :src="iconProjector" alt="tv"/> 
          </div>
      </div>
      <div class="container-linkSingleRoom">
          <button class="btn-room">Booking</button>
      </div>
  </div>
</template>

<script>
import iconTv from "../assets/iconTv.png"
import iconProjector from "../assets/iconProjector.png"
export default {
    name:"Room",
    props:["room"],

    data(){
        return{
            tv:"TV",
            retro:"Retro Projecteur",
            iconTv:iconTv,
            iconProjector:iconProjector
        }
    }
}
</script>

<style scoped>

.container-equipements{
    display:flex
}

.container-cardRoom{
    width: 200px;
    margin-top:25px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-equipements{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
}
.container-linkSingleRoom{
    margin-top: 25px;
}

.equipements-none{
    margin-bottom: 11px;
}



</style>