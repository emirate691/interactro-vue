<template>
  <div>
    <div class="">
      
        <div class="justify-content-center align-items-center text-center">
            
            <b-button
              variant="clear"
              class="edit-cover_image text-center position-absolute"  
              v-on:click="isHidden = !isHidden"
            >
               <template v-if="isHidden"><img src="@/assets/sidebars/use_image_answer.png"><span class="mx-2">USE IMAGE ANSWER</span></template>
               
            </b-button>
            
            
            <b-button
              variant="clear"
              class="answer_setting_btn text-center position-absolute" 
              id="tooltip-button-show-event"
            >
               <img src="@/assets/sidebars/set_answers.png"><span class="mx-2">ANSWER SETTINGS </span>
            </b-button>
            <b-tooltip ref="tooltip" target="tooltip-button-show-event" placement="bottom">
              <div class="tooltip_container justify-content-left align-items-left text-left p-3">
                <div class="tooltip_container_header">
                  <h4 class="mx-3 p-3"><img src="@/assets/icons/set_correct_answer.png"> <span class="mx-2"> Set Correct Answer</span></h4>
                </div>
                <div class=" tooltip_container_header_heading">
                  <h6 class="mx-3"><img src="@/assets/icons/click_answer_logo.svg"><span class="mx-3">CLICK THE CORRECT ANSWER BELOW</span></h6>
                </div>
                <div class="tooltip_container_header_heading_checkbox mx-2 mb-4 pt-5">
                  <b-form-select
                    v-model="selected" :options="options" multiple :select-size="2"
                  >
                   
                  </b-form-select>
                </div>
                <div class="mx-3">
                  <img src="@/assets/icons/explanation_of_correct_answer.svg"><span class="mx-2"><b>EXPLANATION OF CORRECT ANSWER</b></span>
                </div>
                <div class="mt-2 p-3 tooltip_container_header_heading_checkbox_para">
                    <p>This content will be displayed after the question is answered.</p>
                    <b-input-group>
                      <b-form-input placeholder="Enter Explanation" class="p-5 container_header_heading_checkbox_para_input-explanation mb-2" style="background-color:background:"></b-form-input>
                    </b-input-group>
                    <p><img src="@/assets/sidebars/Preview.png"><span class="mx-3"><b>REVEAL CORRECT ANSWERS</b></span></p>
                </div>

                <div class="tooltip_container_header_heading_checkbox_choose mx-4">
                  <p class="">Choose if you would like to reveal the correct answer immediately after a user selects an answer
                    to a quiz question. (Note: this setting is the same for ALL questions).
                  </p>
                   <div class="form-check">
                      <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        Yes, reveal the correct answer after every question No
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        do not reveal the correct answer after every question

                      </label>
                    </div>
                </div>
                <div class="d-flex mx-4 pt-5">
                  
                    <b-button variant="clear" class="save " @click="hide">Save</b-button>
                    <b-button variant="clear" class="close-1" @click="hide">Close</b-button>
              
                </div>

                
              </div>
            </b-tooltip>

          
            <b-button
              variant="clear"
              class="set_correctanswer_btn text-center position-absolute"  
              v-b-toggle.sidebar-no-header 
            >
               <img src="@/assets/sidebars/correct_answer_bg.png" class="correct_answer_bg"><span class="mx-2">SET CORRECT ANSWER </span>
               
            </b-button>
            <b-sidebar id="sidebar-no-header" class="sidebar" aria-labelledby="sidebar-header-title" no-header  shadow right>
              <template  #default="">
                <div class="justify-content-left align-items-left text-left">
                  <div class="sidebar_header p-3">
                    <img src="@/assets/icons/set_correct_answer.png"><span class="">Set Answers Score</span>
                  </div>
                  
                  <div class="sidebar_header_body position-relative">
                    <div class="pt-4">
                      <h6 class="" style="font-size:10px; border-bottom:0.5px solid #C4C4C4;"><img src="@/assets/icons/score.png" class="mx-3"><span class="">SET SCORES FOR EACH ANSWERS</span></h6>
                    </div>
                    <div class="table no-border d-flex mt-5">
                      <div class="px-4">
                        Answer
                        
                        <div class="mt-4">Answer A</div>
                        <span class="mt-4">Answer B</span>
                      </div>
                      <div class="px-5">

                        Score
                        <div class="mt-4">
                           <b-input-group>
                            <b-form-input></b-form-input>
                           </b-input-group>
                        </div>
                      </div>
                        
                    </div>
                    <div class="pt-5 d-flex position-absolute mx-3 tips">
                    <div class="tips_img">
                      <img src="@/assets/icons/Tips.png" class="mx-2 pt-5">

                    </div>
                    <div class="tips_img-help">
                      <p class="mx-3 pt-4" style="font-size:10px"><strong>Help Tip</strong>: When this section is closed, your result score ranges will be automatically adjusted
                        to ensure that all of your scores are included. If you need to adjust your result score ranges,
                        wait until you have set up all answer scores and then adjust the result score ranges.
                      </p>        
                    </div>
                    
                  </div>
                    
                     
                    <div class="d-flex buttons_save_close  mx-4 pt-5 mt-5 position-relative">
                  
                        <b-button variant="clear" class="save" @click="hide">Save</b-button>
                        <b-button variant="clear" class="close-1 " @click="hide">Close</b-button>
              
                  </div>
                  </div>

                   
                </div>
              </template>
            </b-sidebar>
          
        </div>
    </div>
    
   
  </div>
</template>
<script>
export default {
    
    data() {
      return {
        isHidden: true,
        selected : null,
        options: [
          {value : null, text: 'please select the correct answer'},
            
          {value : 'A', text: 'Answer A'},
            
          {value : 'B', text: 'Answer B'},
          {value : 'C', text: 'Answer C'},
          {value : 'D', text: 'Answer D'}
        ]

        
      }
    }
}
</script>
<style lang="scss" scoped>
  

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
      
      top:-17px;
      left:370px;
      border-left:1px solid #C4C4C4;
    }
    .set_correctanswer_btn{
      
      //border-radius: 20px;
       background:#F4F4F4;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:22%;
      top:-17px;
      right:160px;
      border-left:1px solid #C4C4C4;
    }

    .tooltip_container{
      position:relative;
      // top:10px;
      width:560px;
      background:#FFFFFF;
      color:#3D3D3D;
      left:-25px;
      
      

      &_header{
        position:relative;
        background:#EF4873;
        width:600px;
        left:-20px;
        top:-20px;
        color:#FFFFFF;
        &_heading{
        color:#3D3D3D;
        border-bottom: 0.5px solid #C4C4C4;
        &_choose{
          font-family:'Roboto, sans-serif';
          font-size:13px;
          
        }
       
      }
      }
      
    }
    .save{
      background:#EF4873;
      color:#F6F6F6;
      
    }
    .close-1{
      background:#313F68;
      color:#F6F6F6;
     
    }

    //answer score //
    .sidebar {
      &_header{
          background:#EF4873;
          color:#FFFFFF;
          &_body{
          background:#FFFFFF;
          height:600px;
          
          &_set-score{
            font-size:14px;
          }
        }
      }
      .tips{
        top:300px;
        &_img{
          background: #8497CE;
            &-help{
            background:#DBE4FF;
          }
          
        }
        
        
      }
      .buttons_save_close{
        top:300px;
      }
     
    }
    
      
</style>