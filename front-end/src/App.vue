<template>
  <div id="app">
      <NavBar/>
      <router-view/>
  </div>
  
</template>

<script>
import NavBar from "./components/NavBar"
export default {
  components:{
    NavBar
  }
}
</script>

<style>
  *{
  padding:0px;
  margin:0px
  }
  body{
   background-color: #F5F5F5;
  }

</style>
