<template>
    <div class="container-banner">
        <div class="banner" :style="{'background-image':'url(https://cdn.welcometothejungle.co/uploads/website_block_item/image/1235/150402/a5c7be01-800d-4717-951c-59326b8b0b3c.jpg)'}"></div>
        <h1>BOOK A STATION F ROOM </h1>
    </div>
</template>

<script>
export default {
    name:"Banner",
}
</script>

<style>
.banner{
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.6;
    padding-top:80px
}
.container-banner h1{
    color:white;
    position: absolute;
    top: 35%;
    left: 30%;
    font-size: 48px;
    font-weight: 800;
}
.container-banner{
     background-color:black
}
</style>