<template>
    <div class="container-Navbar">
        <div class="container-logo">
              <h1>STATION F</h1>
        </div>
        <div class="container-navLink">
            <ul>
                <li class="link"><router-link to="/">Home</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style>
.container-Navbar{
    background-color:black;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;
    z-index: 1;
}

.container-logo h1{
    color:white

}
.container-logo{
    margin-left: 35px;
}
.container-navLink{
    margin-right:35px
}

.link a {
    color: white;
    text-decoration-line: none;
    font-size: 18px;
}


</style>