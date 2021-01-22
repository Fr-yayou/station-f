<template>
  <div class="rooms-view">
      <Banner/>
      <div class="container-search">
            <div class="searchBar">
                <img class="input-searchIcon" :src="searchIcon" alt="search-icon"/>
                <input class="searchInput" type="text" :keyup="searchRoom"  v-model="search"/>
            </div>
            <div class="more-filter">   
                <select id="equipement"  v-on:change="filterEquipement()" v-model="equipement">
                     <option value="">Equipement</option>
                    <option value="TV">Tv</option>
                    <option value="Retro Projecteur">Retro Projecteur</option>
                </select>
                <select id="capacity"  v-on:change="filterCapacity($event)" v-model="capacity">
                    <option value="">Capacity</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="26">26</option>
                </select>
            </div>
        </div>
      <div v-if="capacity.length == 0 && roomsEquipement.length == 0" class="container-room">
          <div v-for="room in searchRoom" :key="room._id">
            <Room v-bind:room="room"/>
          </div>
      </div>
      <div v-else-if="roomsEquipement.length !== 0" class="container-room">
          <div v-for="room in roomsEquipement" :key="room._id">
            <Room v-bind:room="room"/>
          </div>
        </div>
        <div v-else class="container-room">
          <div v-for="room in roomsCapacity" :key="room._id">
            <Room v-bind:room="room"/>
          </div>
        </div>
  </div>
</template>

<script>
import searchIcon from "../assets/search.png"
import {mapGetters,mapActions} from "vuex"
import Room from "../components/Room"
import Banner from "../components/Banner"
export default {
    name:"Rooms",
    
    data(){
        return{
            search:"",
            searchIcon:searchIcon,
            capacity:"",
            equipement:"",
            roomsEquipement:[],
            roomsCapacity:[]
        }},
    

    components:{
        Room,
        Banner,
    },

    computed:{
        ...mapGetters(["getAllRooms"]),

        searchRoom(){
            return this.getAllRooms.rooms.filter(room =>{
                let lowerCase = room.name.toLowerCase()+room.description.toLowerCase()
                let search = this.search.toLowerCase()
                return lowerCase.match(search)
            })
        },
        
    },

    methods:{
        ...mapActions(["allRooms"]),
                filterEquipement(){
                    this.roomsEquipement=[]
                    this.getAllRooms.rooms.map(room =>{
                        room.equipements.filter(device =>{
                        if(device.name == this.equipement){
                          this.roomsEquipement.push(room)
                   }
                })
            })
        },

        filterCapacity(){
            this.roomsCapacity=[]
            this.getAllRooms.rooms.filter(room =>{
                if(room.capacity == this.capacity){
                     this.roomsCapacity.push(room)
                }
            })
        }
    
    },

    created(){
        this.allRooms()
    }
}
</script>

<style scoped>

.rooms-view{
    padding-bottom:60px
}
.container-room{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right:25px;
    margin-left:25px
}
.container-search{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.searchInput{
    width: 600px;
    height: 40px;
    background-color: white;
    border:1px solid white;
    text-indent: 40px;
}
.searchInput:focus{
    outline: 2px solid #ff00ae;
}
.input-searchIcon{
    position: absolute;
    margin-left: 10px;
    margin-top: 12px;
}

#equipement{
    width:150px;
    height:41px;
    border:1px solid white;
    margin-left: 5px;
}
#capacity{
    width:150px;
    height:41px;
    border:1px solid white;
    margin-left: 5px;
}
#capacity:focus{
    outline: 2px solid #ff00ae;
}
#equipement:focus{
    outline: 2px solid #ff00ae;
}


</style>