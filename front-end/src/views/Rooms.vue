<template>
  <div class="rooms-view">
      <Banner/>
      <div class="container-search">
            <div class="searchBar">
                <img class="input-searchIcon" :src="searchIcon" alt="search-icon"/>
                <input class="searchInput" type="text" :keyup="searchRoom"  v-model="search"/>
            </div>
            <div class="more-filter"></div>
        </div>
      <div class="container-room">
          <div v-for="room in searchRoom" :key="room._id">
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
            searchIcon:searchIcon
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


</style>