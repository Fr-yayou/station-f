<template>
  <div class="container-booking">
    <form @submit="submit">
      <input type="text" v-model="name">
      <input type="email" v-model="email"/>
      <input type="date" v-model="date">
      <div class="container-time">
        <div class="section-startTime">
          <p>Start</p>
          <div v-for="(hour,index) in start" :key="index">
            <input type="submit"  :value="hour"/>
        </div> 
      </div>
      <div class="section-endTime">
        <p>End</p>
        <div v-for="(hour,index) in end" :key="index">
          <input type="submit" :value="hour"/>
        </div>
      </div>
      </div>
      <input type="submit" value="submit">
    </form>

  </div>
</template>

<script>
export default {
    name:"Booking",

    props:["id"],

    data(){
      return{
        start:[8,9,10,11,12,13,14,15,16,17,18,19],
        end:[9,10,11,12,13,14,15,16,17,18,19,20],
        name:"",
        email:"",
        date:"",
      }
    },

    methods:{
      submit(){
        event.preventDefault()
        console.log(this.name,"name")
        console.log(this.email,"email")
        console.log(this.date,"date")
        console.log(this.id)
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