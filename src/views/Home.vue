<template>
  <div class="home">
    <div class="home-content">
      <div class="home-title">
        <h1>My Films</h1>
      </div>
      <div class="home-btn">
        <router-link :to='{name:"Film-list"}'>
            <button class="btn-style">
          Перейти к фильмам
             </button>
         </router-link>
      
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {

  }
}
</script>
<style >
  body {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    font-style: 15px;
    background-color: rgb(24, 24, 24);
}

*,
*:before,
*:after {
    box-sizing: border-box;
}
.home-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
   align-items: center;
  max-width: 900px;
  height: 100vh;
  color: #fff;
  margin: 0 auto;
}
/* .home-title, .home-btn{
  display: flex;
  justify-content: center;
} */
.home-title{
  font-size: 40px;
}
.btn-style{
  color: #fff;
  background: none;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 5px;
  transition: background .1s linear;
}
.btn-style:hover{
  background:rgb(70, 22, 22)
}
</style>