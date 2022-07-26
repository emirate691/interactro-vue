<template>
    <b-container fluid class="homepage__container p-0 m-0">
        <div>
           <login />
        </div>
        
    </b-container>
</template>
<script>
//import Register from '../components/auth/Register.vue';
//import Navbar from '../components/Navbar.vue';
//import Footer from '../components/Footer.vue';
import Login from '../components/auth/Login.vue';
//import Register from '../components/auth/Register.vue';

export default {
    name: "Home",
    components: { Login },

    data() {
      return {

      };
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');
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