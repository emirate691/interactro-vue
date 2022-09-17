<template>
    <div class="">
        <b-form-select
            v-model="selected" :options="options" :select-size="4"
        >
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </b-form-select>


        <!--form enctype="multipart/form-data">
         <div class="info__1 position-absolute">
              <img src="@/assets/images/info (1).png">
          </div>
        <div class="dropbox-1">
          <div class="justify-content-center align-items-center text-center">
            <b-button
              variant="clear"
              class="edit-cover_image text-center position-absolute"
             
              
            >
               <img src="@/assets/sidebars/use_image_answer.png"><span class="mx-2">USE IMAGE ANSWER</span>
            </b-button>
             <b-button
              variant="clear"
              class="answer_setting_btn text-center position-absolute"
              
                       
              
            >
               <img src="@/assets/sidebars/set_answers.png"><span class="mx-2">ANSWER SETTINGS </span>
            </b-button>
            <div>
             <b-button
                variant="clear"
                class="set_correctanswer_btn text-center position-absolute"
                v-b-toggle.sidebar-no-header  
              
              >
                <img src="@/assets/sidebars/correct_answer_bg.png" class="correct_answer_bg"><span class="mx-2">SET CORRECT ANSWER </span>
              </b-button>
              <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-header-title" no-header  shadow right>
          
               <template #default="{ hide }" >
              <div class="p-3 sidebar_content">
                <div  id="sidebar-no-header-title">
                  <h4 id="sidebar-no-header-title-header" class="header p-3">
                    <img src="@/assets/icons/set_correct_answer.png"><span class="mx-2">Set Correct Answers </span>
                  </h4>
                </div>
                <div class="mt-5 correct-answer">
                  <img src="@/assets/icons/click_answer_logo.svg"><span class="mx-2">CLICK THE CORRECT ANSWER BELOW</span>
                  
                    <div class="">
                      <b-form-checkbox-group
                        v-model="value"
                        :options="options"
                        :state="state"
                        name="checkbox-validation"
                      >
                        <b-form-invalid-feedback :state="state">Enable Select Multiple Answers</b-form-invalid-feedback>
                      </b-form-checkbox-group>
                    </div>
                    <div class="">
                      <Selectanswer />
                      
                    </div>
                    <div class="">
                      <img src="@/assets/icons/explanation_of_correct_answer.svg"><span class="mx-2"><b>EXPLANATION OF CORRECT ANSWER</b></span>
                    </div>
                   
                </div>
                <div class="">
                 <p>This content will be displayed after the question is answered.</p>
                 <b-input-group>
                  <b-form-input placeholder="Enter Explanation" class="input-explanation mb-2"></b-form-input>
                 </b-input-group>
                 <p><img src="@/assets/sidebars/Preview.png"><span class="mx-3"><b>REVEAL CORRECT ANSWERS</b></span></p>
                </div>
                <div class="choose">
                  <p>Choose if you would like to reveal the correct answer immediately after a user selects an answer
                    to a quiz question. (Note: this setting is the same for ALL questions).
                  </p>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
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
                   
                
                <div class="d-flex">
                  <b-button variant="clear" class="w-25 " block @click="hide">Close</b-button>
                  <b-button variant="clear" class="w-25 " block @click="hide">Close</b-button>

                </div>
              </div>
          </template>
        </b-sidebar>

            </div>
          </div>
           <div class="mt-5 d-flex px-5">
              <b-form-group >
                <b-input-group class="mb-2">
      
                <b-form-input aria-label="Text input with checkbox" class="checkbox_bg-1">
                                  
                </b-form-input>
                     
                    <div class="checkbox_bg-1_frame1 position-absolute mx-2">
                      <div class="checkbox_bg-1_edit position-absolute"><img src="@/assets/sidebars/edit-image_logo.png" class="mx-1"><span class="mx-2">Edit</span></div>

                      <img src="@/assets/sidebars/show_question_img_logo.png" class="pt-4 mt-3">
                    </div>
                     <p class="mx-5 answer_option position-absolute">ANSWER A</p>
                </b-input-group>
              </b-form-group>
              <b-form-group >
                <b-input-group class="mb-2">
      
                <b-form-input aria-label="Text input with checkbox" class="checkbox_bg-1 mx-3">
                  
                </b-form-input>
                  <div class="checkbox_bg-1_frame position-absolute mx-4">
                    <div class="checkbox_bg-1_edit position-absolute "><img src="@/assets/sidebars/edit-image_logo.png" class="mx-1"><span class="mx-2">Edit</span></div>

                    <img src="@/assets/sidebars/show_question_img_logo.png" class="pt-4 mt-4">
                  </div>
                  <p class="mx-5 px-4 answer_option position-absolute">ANSWER B</p>
                </b-input-group>
              </b-form-group>
              <b-form-group >
                <b-input-group class="mb-2">
      
                <b-form-input aria-label="Text input with checkbox" class="checkbox_bg-1 mx-4">
                  
                </b-form-input>
                <div class="checkbox_bg-1_frame position-absolute px-3 mx-4"><img src="@/assets/sidebars/show_quetion_img_add_logo.png" class="pt-4 mt-3"></div>

                 <b-button
              
                  variant="clear"
                  class="add_quiz-1_btn text-center  position-absolute"
                  @click="addMore()"
                  
                >
                  + ADD ANSWER
                </b-button>
                  </b-input-group>
                  
              </b-form-group>
              
           </div>
            
            <div class="mt-4" v-for="(answer, index) in answers" :key="index">
              
                
              
            </div>
           
            <div class="w-full mt-4 p-10">
      
          </div>
        </div>
      </form-->
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            selected : null,
            options: [
              {value : null, text: 'please select the correct answer'},
                
              {value : null, text: 'please select the correct answer'},
                
              {value : null, text: 'please select the correct answer'}
            ]

            
        }
    }
}
</script>