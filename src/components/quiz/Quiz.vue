<template>
  <div class="untitlequiz_page p-2 m-2 ">
  
    <div class="untitlequiz_page-header">
        <h4 class="text-center font-weight">QUESTION 1</h4>
    </div>
    <div class=" show__question justify-content-center align-items-center text-center" id="app">
        <b-button
            variant="clear"
            class="show__question__image text-center position-absolute"
            v-on:click="isHidden = !isHidden"
           
        >
        
              <template v-if="isHidden"><img src="@/assets/sidebars/Preview.png"><span class="mx-2">SHOW QUESTION IMAGE </span>
               
              </template>
             
              <template v-else><img src="@/assets/sidebars/hide.png"><span class="mx-1">HIDE QUESTION IMAGE</span>
                 <span class=""><button class="show__question__image">EDIT</button> </span>
                 </template>
                 

        </b-button>
        
        
         <div class="pt-5 mt-5 show_image_question" v-if="!isHidden">
            <div class="">
              <img src="@/assets/sidebars/Image.png" class="mb-5">
            </div>
           
          </div>
          
        <form enctype="multipart/form-data">
         <div class="info__1 position-absolute">
              <img src="@/assets/images/info (1).png">
          </div>
        <div class="dropbox">
           <div class="mt-5">
              <b-form-group >
                <b-input-group class="mb-2">
      
                <b-form-input aria-label="Text input with checkbox" class="checkbox_bg" placeholder="ANSWER A"></b-form-input>
                <span class=" mx-3 mt-2 position-absolute"><img src="@/assets/sidebars/rectangle.png"></span>
                </b-input-group>
              </b-form-group>
           </div>
            
            <div class="mt-4" v-for="(answer, index) in answers" :key="index">
              <b-form-group >
                <b-input-group class="mb-2">
                  <b-form-input aria-label=""  v-model="answer.answerName" class="checkbox_bg"  placeholder="ANSWER B"></b-form-input>
                  <span class="checkbox_tick mx-3 mt-2 position-absolute"><img src="@/assets/sidebars/rectangle.png"></span>
                      <button
                        type="button"

                        class="ml-2 rounded-md border px-3 py-2 bg-white-600"
                        @click="remove(index)"
                        v-show="index != 0"
                      >
                        <b-icon icon="trash" />
                      </button>
                </b-input-group>
                
              </b-form-group>
            </div>
           <div class="add_quiz justify-content-center align-items-center text-center mt-5 m-3">
              <b-button
              
                  variant="clear"
                  class="add_quiz_btn text-center m-2"
                  @click="addMore()"
                  
                >
                <span class="mx-2"><img src="@/assets/sidebars/plus.png">ADD ANSWER</span>
                </b-button>
            </div> 
            <div class="w-full mt-4 p-10">
      
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
  import Selectanswer from './Selectanswer.vue'
  export default{
    name: 'untitlequiz_page',
    component: { Selectanswer },
    props: {
    msg: String,
    
  },
    data () {
      return {
        isHidden: true,
       
        answers: [
        {
          answerName: "",
        },
         
        ],
      }
    },
    methods: {
      addMore() {
        this.answers.push({
        courseName: "",
      });
      },
      remove(index) {
      this.answers.splice(index, 1);
    },
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
 
    //background: #D9D9D9;
    border: 0.5px dashed #C4C4C4;
    padding: 10px 10px;
    margin-top:100px;
    height: 400px;
    position: relative;
    //cursor: pointer;
    border-radius: 10px;

  }
  .dropbox-1 {
    /* the dash box */
 
    //background: #D9D9D9;
    border: 0.5px dashed #C4C4C4;
    padding: 10px 10px;
    margin-top:100px;
    height: 300px;
    position: relative;
    //cursor: pointer;
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
        top:85px;
        left:400px;
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
      left:350px;
      border-left:1px solid #C4C4C4;
    }
    .set_correctanswer_btn{
      background:#F6F6F6;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:22%;
      top:-17px;
      right:137px;
      border-left:1px solid #C4C4C4;
    }
   
    .input_description{
      width:100%;
      background: #F7F7F7;
      border-radius: 10px;
      border:1px solid #F7F7F7;
      opacity:1;
      height:40px;
    }
    .checkbox_bg{
      background: #F7F7F7;
      border-radius: 10px;
      height:50px;
  
    }
    .checkbox_bg-1{
      background: #F7F7F7;
      border-radius: 10px;
      height:200px;
      &_frame{
        background:#C4C4C4;
        
        top:10px;
        width:80%;
        height:150px;
        
      }
      &_frame1{
        background:#C4C4C4;
        
        top:10px;
        width:90%;
        height:150px;
        
      }
      &_edit{
        background:#FFFFFF;
        top:0px;
        left:70px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        height:20px;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
        border-radius: 3px 3px 0px 0px;
      }
  
    }
    
    .checkbox_bg::placeholder{
      padding-left:50px;
    }
    .checkbox_bg-1::placeholder{
      padding-left:50px;
      padding-top:10px;
    }
    .checkbox_tick{
       padding:30px, 30px
      
    }
    .add_quiz{
      border: 0.5px dashed #C4C4C4;
      border-radius: 10px;
      height:60px;
      &_btn{
      background: #E5E5E5;
      border-radius: 10px;
      color:#AFAFAF;
      width:20%;
      font-size:14px;
      }

    }
    .add_quiz-1{
      border: 0.5px dashed #C4C4C4;
      border-radius: 10px;
      height:60px;
      &_btn{
      background: #FFCAD8;
      border-radius: 10px;
      color:#3D3D3D;
     
      
      font-size:10px;
      border-radius:50px;
      bottom:10px;
      left:70px;

      }
      
    }
    .answer_option{
      font-size:15px;
      bottom:-5px;
    }
    
    .info__1{
      right:10px;
    }
    .info__2{
      right:10px;
      bottom:280px;
    }
    .info__3{
      right:100px;
      bottom:130px;
    }
    .show_image_question{
       background: #D9D9D9;
       //height:300px;
    }
    /*set correct answer*/
    #sidebar-no-header{
     
      &-title{
        position:relative;
        color:#FFFFFF;
        background:#EF4873;
        width:320px;
        margin-left:-20px;
        margin-top: -20px;
        &-header{
//
        }
      }
      .sidebar_content{
         background:#FFFFFF;
         
      }
      .correct-answer{
        border-top:0.5px solid #C4C4C4;
        border-bottom:0.5px solid #C4C4C4
      }
      .input-explanation{
        height:100px;
        background:#F4F4F4;
      }

      
      
    } 

    

}
     
</style>