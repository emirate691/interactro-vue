<template>
  <div class="untitlequiz_page p-2 m-2 ">
  
    <div class="untitlequiz_page-header">
        <h2 class="text-center font-weight-bolder">QUESTION 1</h2>
    </div>
    <div class=" show__question justify-content-center align-items-center text-center" id="app">
        <b-button
            variant="clear"
            class="show__question__image text-center position-absolute"
            v-on:click="isHidden = !isHidden"
           
        >
              <template v-if="isHidden"><img src="@/assets/sidebars/Preview.png"><span class="mx-2">SHOW QUESTION IMAGE </span></template>
              <template v-else></template>
            
        </b-button>
          
        <form enctype="multipart/form-data" v-if="isHidden">
         <div class="info__1 position-absolute">
              <img src="@/assets/images/info (1).png">
          </div>
        <div class="dropbox">
          <div class="justify-content-center align-items-center text-center">
            <b-button
              variant="clear"
              class="edit-cover_image text-center position-absolute"
              
            >
               <img src="@/assets/sidebars/list.png"><span class="mx-2">USE TEXT ANSWERS</span>
            </b-button>
             <b-button
              variant="clear"
              class="answer_setting_btn text-center position-absolute"
              
            >
               <img src="@/assets/sidebars/set_answers.png"><span class="mx-2">ANSWER SETTINGS </span>
            </b-button>           
             <b-button
              variant="clear"
              class="set_correctanswer_btn text-center position-absolute"
              
            >
               <img src="@/assets/sidebars/correct_answer_bg.png" class="correct_answer_bg"><span class="mx-2">SET CORRECT ANSWER </span>
            </b-button>
          </div>
           <div class="d-flex mt-5 mx-5 px-5">
            
               <div class="mx-4 edit_image_frame">
                   <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                        <div class="edit_image_frame-dropbox">
                            <div class="justify-content-center align-items-center text-center">
                                <b-button
                                    variant="clear"
                                    class="edit-cover_image text-center position-absolute"
              
                                >
                                    
                                </b-button>

                            </div>
                       </div>
                    </form>
                    <span class="">ANSWER A</span>
                </div>
                <div class="mx-4 edit_image_frame">
                    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                        <div class="edit_image_frame-dropbox">
                            <div class="justify-content-center align-items-center text-center">
                                <b-button
                                    variant="clear"
                                    class="edit-cover_image text-center position-absolute"
              
                                >
                                    
                                </b-button>
                                    mmm
                            </div>
                       </div>
                    </form>
                    <span class="">ANSWER B </span>
                </div>
                <div class="mx-4 edit_image_frame">
                    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                        <div class="dropbox">
                            <div class="justify-content-center align-items-center text-center">
                                <b-button
                                    variant="clear"
                                    class="edit-cover_image text-center position-absolute"
              
                                >
                                    
                                </b-button>

                            </div>
                       </div>
                    </form>
                     <span 
                      variant="clear"
                     >
                        ADD ANSWER
                    </span>
                </div>
           </div>
            
         
           
        </div>
      </form>
           
    </div>
       <div class="info__2 position-absolute">
          <img src="@/assets/images/info (1).png">
        </div>
      
       
      
  
  </div>
  
</template>
      
            
          
<script>
  export default{
    name: 'untitlequiz_page',
    data () {
      return {
        isHidden: true
      }
    }
  }
    
      
 
    

</script>
<style lang="scss" scoped>
  .untitlequiz_page{
    &-header{
      background:#F6F6F6;
      border-radius:10px;
      margin-top:-50px;
    
    }

  
  .dropbox {
    /* the dash box */
 
    
    border: 0.5px dashed #C4C4C4;
    padding: 10px 10px;
    margin-top:100px;
    height: 300px;
    position: relative;
    border-radius: 10px;

    }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
    .show__question{
      margin-top:50px;
    
      border-top:0.5px dashed #C4C4C4;
      &__image{
        background:#FFCAD8;
        border-radius: 20px;
        border:1px solid #FFCAD8;
        color:#3D3D3D;
        font-weight: 500;
        font-size: 10px;
        width:20%;
        top:250px;
        left:490px;
      }
    }
    .edit-cover_image{
      background:#F6F6F6;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:20%;
      top:-17px;
      left:200px;
      

    }
    .answer_setting_btn{
      background:#F4F4F4;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:20%;
      top:-17px;
      left:380px;
      border-left:1px solid #C4C4C4;
    }
    .set_correctanswer_btn{
      background:#F6F6F6;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:20%;
      top:-17px;
      right:170px;
      border-left:1px solid #C4C4C4;
    }
   
    
    
    .edit_image_frame{
      background:#E5E5E5;
      border-radius: 5px;
      width:150px;
      height:60px;
      
    .edit_image_frame-dropbox{
        background:red;
        height:100px;
    }
    }
    .info__1{
      right:100px;
    }
    .info__2{
      right:100px;
      bottom:280px;
    }
    .info__3{
      right:100px;
      bottom:130px;
    }

    

}
     
</style>