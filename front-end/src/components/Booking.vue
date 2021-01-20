<template>
  <div class="container-booking">
    <form @submit="submitBooking">
      <input type="text" v-model="name">
      <input type="email" v-model="email"/>
      <input type="date" v-model="date">
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
          <option value="15">15:00</option>
          <option value="16">16:00</option>
          <option value="18">18:00</option>
          <option value="19">19:00</option>
          <option value="20">20:00</option>
        </select>
      </div>
      </div>
      <input type="submit" value="submit">
    </form>

  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name:"Booking",

    props:["id"],

    data(){
      return{
        name:"",
        email:"",
        date:"",
        endTime:"",
        startTime:""
      }
    },

    methods:{

      ...mapActions(["addBooking"]),

      submitBooking(){
        event.preventDefault()
        //Get the the value of the ooptions html tag//

        // let select = document.getElementById("select-end")
        // for(let i = 0; i < select.length; i++){
        //   console.log(select[i].value)
        // }
        let newBooking={
          room_id:this.id,
          name:this.name,
          email:this.email,
          date:this.date,
          startTime: parseInt(this.startTime),
          startEnd:parseInt(this.endTime)
        }

        this.addBooking(newBooking)
        .then(res => console.log(res))
      }
    }
}
</script>

<style scoped>
.container-booking{
  display: flex;
  flex-direction: column;
}

.container-time{
  display: flex;
}
</style>