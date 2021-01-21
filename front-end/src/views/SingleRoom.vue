<template>
  <div class="container-singleViewRoom">
      <div v-for="detail in getRoom" :key="detail._id">
          <div class="room-details">
                <div class="container-imageSingleRoom">
                    <img class="image-office" :src="office" alt="office" />
                </div>
                <h5>{{detail.name}}</h5>
                <p>{{detail.description}}</p>
                <div class="iconPeople">
                    <img :src="people" alt="people"/>
                    <p>{{detail.capacity}}</p>
                </div>   
            <div class="container-equipements">
                <div class="room-equipements" v-if="detail.equipements.length == 0">
                <p class="equipements-none">No equipement</p>
          </div>
          <div class="room-equipements" v-else v-for="gear in detail.equipements" :key="gear._id">
              <img v-if="gear.name == tv" :src="iconTv" alt="tv"/> 
              <img  v-else-if="gear.name == retro" :src="iconProjector" alt="tv"/> 
          </div>
        </div>
        </div>
        <Booking v-bind:id="detail._id"/>
      </div>
  </div>

</template>

<script>
import people from "../assets/people.png"
import office from "../assets/office.jpg"
import {mapGetters,mapActions} from "vuex"
import iconTv from "../assets/iconTv.png"
import iconProjector from "../assets/iconProjector.png"
import Booking from "../components/Booking"
export default {
    name:"SingleRoom",
    
    data(){
        return{
            tv:"TV",
            retro:"Retro Projecteur",
            iconTv:iconTv,
            iconProjector:iconProjector,
            office:office,
            people:people
        }
    },

    components:{
        Booking
    },

    computed:{
        ...mapGetters(["getAllRooms"]),
        
        getRoom(){
            return this.getAllRooms.rooms.filter(room =>{
              return  room._id == this.$route.params.id
            })
        }
    },

    methods:{
        ...mapActions(["allRooms"]),
    },

    created(){
        this.allRooms()
    }
}
</script>

<style scoped>
.container-singleViewRoom{
    margin-right:25px;
    margin-left:25px;
    display: flex;
    justify-content: center;
    padding-top:100px
}

.room-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

}

.room-details h5{
    font-size:25px;
    margin-top: 10px;
}
.container-equipements{
    display: flex;
    width: 200px;
    justify-content: space-around;

}

.container-imageSingleRoom{
    width: 100%;
}
.image-office{
    width: 500px;
    height: 300px;
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