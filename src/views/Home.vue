<template>
    <b-container fluid class="homepage__container p-0 m-0">
        <div>
           <Login />
        </div>
        
    </b-container>
</template>
<script>

import Login from '../components/auth/Login.vue';
export default {
    name: "Home",
    components: { Login },

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
    font-family: 'Roboto', sans-serif;
    .footer__container {
        margin-top: auto;
    }
}
</style>