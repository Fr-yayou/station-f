<template>
  <div class="container-booking">
    <div class="container-successMessage" v-if="success">
      <transition name="bounce">
         <img v-if="success" :src="imageSuccess" alt="success">
      </transition>
      <h3 class="success">Your room has been booked</h3>
    </div>
    <form v-else class="booking-form" @submit="submitBooking">
      <input class="input-booking" type="text" placeholder="Name" v-model="name">
      <input class="input-booking" placeholder="Email" type="email" v-model="email"/>
      <input type="date" class="input-booking" v-model="date" @change="filterTime">
      <div class="container-time">
        <div class="section-startTime">
          <p>Start</p>
          <select id="select-start" v-model="startTime">
            <option value="8">8:00</option>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
          </select>
      </div>
      <div class="section-endTime">
        <p>End</p>
        <select id="select-end" v-model="endTime">
          <option value="9">9:00</option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
          <option value="12">12:00</option>
          <option value="13">13:00</option>
          <option value="14">14:00</option>
          <option value="15">15:00</option>
          <option value="16">16:00</option>
          <option value="17">17:00</option>
          <option value="18">18:00</option>
          <option value="19">19:00</option>
          <option value="20">20:00</option>
        </select>
      </div>
      </div>
      <div class="container-btnSubmit">
         <input class="btnSubmit" type="submit" value="Book your room">
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
import Success from "../assets/check.png"
export default {
    name:"Booking",

    props:["id"],

    data(){
      return{
        name:"",
        email:"",
        date:"",
        endTime:"",
        startTime:"",
        success:null,
        imageSuccess:Success
      }
    },

    computed:{
      ...mapGetters(["getAllBookings"])
    },

    methods:{
      //function to filter the time display//
      filterTime(){
        if(this.data != ""){
          this.getAllBookings.booking.map(booking =>{
            if(booking.date == this.date){
              let startTime = booking.startTime
              let endTime = booking.endTime
              //select the select to get the value fron the input//
              let selectStart = document.getElementById("select-start")
              for(let i = 0; i < selectStart.length; i++){
                //change the value as integer//
                let value = parseInt(selectStart[i].value)
                if(value >= startTime && value < endTime){
                    selectStart[i].style.display="none"
                }
              }

              let selectEnd = document.getElementById("select-end")
              for(let i = 0; i < selectEnd.length; i++){
                //change the value as integer//
                let value = parseInt(selectEnd[i].value)
                if(value > startTime && value <= endTime){
                    selectEnd[i].style.display="none"
                }
              }

            }
          })
        }
      },


      ...mapActions(["addBooking","allBookings"]),

      submitBooking(){
        event.preventDefault()
        let newBooking={
          room_id:this.id,
          name:this.name,
          email:this.email,
          date:this.date,
          startTime: parseInt(this.startTime),
          endTime:parseInt(this.endTime)
        }

        this.addBooking(newBooking)
        .then(res =>{
          this.success = res.message
        })
        this.name=""
        this.email=""
        this.date=""
        this.startTime=""
        this.endTime=""
      }
    },

    created(){
      this.allBookings()
    },
}
</script>

<style scoped>

.container-successMessage{
  display:flex;
  align-items: center;
  justify-content: center;
}

.bounce-enter-active{
  animation: bounce-in .5s;
}
.success{
  margin-left: 20px;
}

@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}
.container-booking{
  display: flex;
  flex-direction: column;
  margin-top:25px;
  width: 500px;
  padding-bottom: 70px;
}

.container-time{
  display: flex;
}

.booking-form{
  display: flex;
  flex-direction: column;
}

.input-booking{
    height: 30px;
    margin-bottom: 15px;
    border: 1px solid white;
    text-indent: 10px;
}

.input-booking:focus{
  outline: 1px solid #ff00ae; ;
}

::placeholder{
  color:#ff00ae;
}

.section-startTime{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#select-start{
  width:200px;
  height:30px;
   border:1px solid white
}

.section-endTime{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#select-end{
  width: 200px;
  height: 30px;
  border:1px solid white
}
#select-end:focus{
  outline:1px solid #ff00ae;
}
#select-start:focus{
  outline:1px solid #ff00ae;
}

.container-time{
  display: flex;
  justify-content: space-around;
}

.container-btnSubmit{
  margin-top: 25px;
  display: flex;
  justify-content: center;
}

.btnSubmit{
  width: 200px;
  height: 35px;
  color:#ff00ae;
  background-color: white;
  border:1px solid #ff00ae;
  cursor: pointer;
}
.btnSubmit:hover{
  background-color:#ff00ae ;
  color: white;
}

</style>