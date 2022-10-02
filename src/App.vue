<template>
  <div id="app">
   
    <router-view></router-view>
  </div>

</template>
<script>


export default {
    name: "Home",
    

    data() {
      return {

      };
    },
}
</script>

<style lang="scss" scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');

  .homepage__container {
    // background-color: #DCDCDC;
      
      flex-direction: column;
      min-height: 100vh;
      overflow-x: hidden;
      font-family: 'Poppins', sans-serif;
      .footer__container {
          margin-top: auto;
      }
  }
</style>