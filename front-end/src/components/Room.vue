<template>
  <div class="container-cardRoom">
      <h5>{{room.name}}</h5>
      <p>{{room.description}}</p>
        <div class="iconPeople">
          <img :src="people" alt="people"/>
          <p>{{room.capacity}}</p>
        </div>  
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
            <router-link :to="`/rooms/${room._id}`">
                 <button class="btn-room">Booking</button>
            </router-link>
      </div>
  </div>
</template>

<script>
import people from "../assets/people.png"
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
            iconProjector:iconProjector,
            people:people
        }
    }
}
</script>

<style scoped>

.container-equipements{
    display:flex
}

.container-cardRoom{
    width: 300px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    background-color: white;
    height: 200px;
    border: 1px solid white;
    box-shadow: 0 0 35px #D3D3D3
    
}

.container-cardRoom h5{
    font-size:25px;
    padding-bottom:15px;
    margin-top: 10px;
}

.container-cardRoom:hover{
    border:1px solid #ff00ae;
}

.container-equipements{
    display: flex;
    width: 200px;
    justify-content: space-around;
    margin-top: 15px;
}
.container-linkSingleRoom{
    margin-top: 25px;
}

.equipements-none{
    margin-bottom: 11px;
}

.btn-room{
    padding: 0.75rem 2.125rem 0.75rem 2.125rem;
    background: #fff;
    color: #ff00ae;
    border: 1px solid #ff00ae;
}

.btn-room:hover{
    background-color: #ff00ae;
    color:white;
}

.iconPeople{
    display: flex;
    align-items: flex-end;
    margin-top: 10px; 
}

.iconPeople{
    color:#ff00ae
}



</style>