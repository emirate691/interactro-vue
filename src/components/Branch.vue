<!--template>
    <div class="untitlequiz__page d-flex vh-100"> 

        <div class="untitlequiz__page__sidebar h-100 ">  
            <div class="">
                <router-link to="/">
                    <img  class="m-3 px-3"  src="@/assets/headers/dashboard_logo.png">
                </router-link>
            </div>
            <div class="row mt-5">
                <div class="col-md-12 col-sm-12 ">
                    <div class="accordion accordion-flush p-3" id="faqlist">
                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                <img  class="pr-3" src="@/assets/sidebars/cover_image.png"> COVER
                                </button>
                            </h2>
                            <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
                                    <div class="mx-5">
                                        <img src="@/assets/sidebars/lette_a.png">  Untitled Quiz 
                                    </div>          
                                </div>
                            </div>
                        </div>

                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                    <img class="pr-3" src="@/assets/sidebars/question.png">QUESTIONS
                                </button>
                            </h2>
                            <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                               <div id="faq-content-2" class="accordion-collapse-1 collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body-1">
                                    <div class="mx-4">
                                        <b-link
                                            class="link "
                                        >
                                        <img class="pr-2 move__icon" src="@/assets/sidebars/move.png"> <img class="pr-2" src="@/assets/sidebars/question.png">  Question 1 <img class="mx-3 setting__icon" src="@/assets/sidebars/settings.png">
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-2"
                                        >
                                           <img class="pr-2" src="@/assets/sidebars/plus.png"> ADD NEW QUESTION
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-2"
                                        >
                                           <img class="pr-2" src="@/assets/sidebars/animate__checkbox.png"> ANIMATE CHECKBOX
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-5"
                                        >
                                           <img class="pr-2" src="@/assets/sidebars/branching.png">  BRANCHING LOGIC
                                        </b-link>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>

                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                    <img class="pr-3" src="@/assets/sidebars/result__image.png">RESULTS
                                </button>
                            </h2>
                            <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </div>
                            </div>
                        </div>

                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                    <img class="pr-3" src="@/assets/sidebars/envelope.png">LEAD GENERATION
                                </button>
                            </h2>
                            <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                      xdx          </div>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h2 class="header">
                                
                                <img class="pr-2" src="@/assets/sidebars/share.png">SOCIAL SHARE SETTINGS
                                
                            </h2>
                           
                        </div>
                        <div class="mb-4">
                            <h2 class="header">
                                
                                    <img class="pr-2" src="@/assets/sidebars/Tracking.png"> CONVERSION TRACKING
                                
                            </h2>
                            <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="botton_btn position-absolute d-flex ">
                    
                
                <div class="botton_btn_help position-absolute">
                    <div class="p-3">
                        <img class="" src="@/assets/sidebars/help.png">
                        <span class="ml-2   botton_btn_help_para">HELP</span>
                    </div>
                </div>
        
                        
                <div class="botton_btn_change position-relative pl-3">
                    <div class="mt-3">
                        <img  class="" src="@/assets/sidebars/Swap.png">
                        <span class="ml-2  botton_btn_change_type">CHANGE QUIZ TYPE</span>
                    </div>
                </div>
                    
                    

            </div>
            

        </div>  
    

        
        <b-col class="untitle__page">
            <div class="d-flex upgrade">
                <div class="upgrade-btn-  mt-2 mx-2">
                    <b-button variant="clear" class="upgrade-btn" to="/">
                        <span class=""><img class="pr-3" src="@/assets/sidebars/save file.png">All changes saved</span>
                    </b-button>
                    
                </div>
                <div class="upgrade-btn  mt-2 mx-2">
                    <b-button variant="clear" class="upgrade-btn___link" to="/">
                        <span class=""><img src="@/assets/sidebars/Preview.png"> </span>
                    </b-button>
                    
                </div>
                <div class="upgrade-btn mt-2 mx-2">
                    <b-button variant="clear" class="upgrade-btn___link" to="/">
                        <span class=""><img class="pr-3" src="@/assets/sidebars/save_exit.png"> SAVE & EXIT</span>
                    </b-button>
                    
                </div>
                <div class="upgrade-btn mt-2 mx-2">
                    <b-button variant="clear" class="upgrade-btn___link" to="/">
                        <span class=""> <img class="pr-3" src="@/assets/sidebars/publish.png"> PUBLISH</span>

                    </b-button>
                    
                </div>
            </div>
            <div class="right-block mx-auto d-flex justify-content-end position-absolute">
                
                
                
                <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                        <b-avatar
                            size="1.5rem"
                            class="mb-5"
                        />
                        <span class="user mx-2">user</span>
                        <span class="">
                            <img class="px-3 dropdown mb-5" src="@/assets/headers/dropdown_arrow.png" alt="dropdown">
                        </span>
                    </template>
                        <b-dropdown-item href="#">
                            <b-icon icon="gear-fill" aria-hidden="true" />
                            Settings
                        </b-dropdown-item>
                        <b-dropdown-item >
                        <span @click.prevent="logout">
                            <b-icon icon="power" aria-hidden="true" />
                            Logout
                        </span>
                    </b-dropdown-item>
                        <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" class="noti" no-caret>
                    
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                    
                    </b-dropdown>
                    
                </b-dropdown>
                <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" class="noti" no-caret>
                    <template #button-content>
                        <img class="mb-5" height="" src="@/assets/icons/notification.svg" alt="">
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                </b-dropdown>
    
            </div>
            <div class="mt-5 d-flex button_text_section">
                <div class="button_text_section_button-color d-flex col-6">

                    <span class="mt-2"> 
                        <b-button class="background_color mx-2"></b-button>
                        <h6 class="mx-2">Background</h6>
                    </span>
                    <span class="mt-2">
                        <b-button class="option mx-2"></b-button>
                        <h6 class="mx-2">Option</h6>
                    </span>
                    <span class="mt-2">
                        <b-button class="selection  mx-2"></b-button>
                        <h6 class="mx-2">Selection</h6>
                    </span>
                    <span class="mt-2">
                        <b-button class="progress__bar mx-2"></b-button>
                        <h6 class="mx-2">Progress bar</h6>
                    </span>
                    <span class="mt-2 ">
                        <b-button class="button mx-2"></b-button>
                        <h6 class="mx-2 ">Button</h6>
                    </span>
                <div class="col-4 section_2 right">
                    <div class="m-3">
                        <span class="pt-5">Quiz Color<img class="mx-2" src="@/assets/sidebars/fill icon.png"> </span>
                    </div>
                </div>
                </div>
                <div class="button_text_section__text_image col-">
                    <img height="30px" class="mt-3 mx-5" src="@/assets/sidebars/Font.png">
                    <img class="mt-3" src="@/assets/sidebars/logo__image.png">
                </div>
            </div>
            <div class="untitlequiz p-5 m-5 pb-5">
                
                <div class="container">
                    <Quiz />
                </div>
                
                <div class=" power-by mx-5 position-absolute ">
                    <img src="@/assets/images/powered by.png" height="34px">
                </div>
            </div>
        </b-col>
        
                
    </div>
</template>
<script>
    import Quiz from '../components/quiz/Quiz.vue'
    export default {
        name: 'Question',
        components: { Quiz }
    }
   
</script>
 <style lang="scss" scoped>
    .untitlequiz__page{
        &__sidebar{
            background:#313F68;
            width:300px;
            position:sticky;
            .accordion-collapse {
                border: 0;
            }
            .accordion-button {
                padding: 0px;
                font-weight: bold;
                border: 0;
                font-size: 16px;
                color:#AFAFAF;
                text-align: left;
                background:#313F68;   
                
            }
            .accordion-button-1 {
                padding: 0px;
                font-weight: bold;
                border: 0;
                font-size: 16px;
                color:#AFAFAF;
                text-align: left;
                background:#313F68;   
                
            }
            .accordion-button:focus {
                box-shadow: none;
                border: none;
                background:#313F68;  
            }
            .accordion-button:not(.collapsed) {
                background:#313F68;   
                color: #FFFFFF;
            }
            .accordion-body {
                padding: 8px;
                background:#EF4873;
                position:relative;
                left:-15px; 
                width:300px;   
                
            }
            .accordion-body-1{
                background:#243052;
                padding: 8px;
                position:relative;
                left:-15px; 
                width:300px;  
                
                
            }
            .accordion-button::after {
                width: auto;
                height: auto;
                content: "+";
                font-size: 40px;
                background-image: none;
                
                font-weight: 100;
                color: #AFAFAF;
                transform: translateY(-4px);
            }
            .accordion-button-1::after {
                width: auto;
                height: auto;
                content: "+";
                font-size: 40px;
                background-image: none;
                
                font-weight: 100;
                color: #AFAFAF;
                transform: translateY(-4px);
            }
            .link{
                color:#C4C4C4;
                font-weight: 400;
                font-size: 12px;
                background:#243052;
                &:hover{
                    color:#F6F6F6;
                    text-decoration:none;
                    background:#1B2647;
                    width:900px;
                    padding:8px;
                    position:relative;
                    
                    padding-left: 0px;
                    
                }
                
            }
            .move__icon{
                position: absolute;
                left:3px;
            }
            .setting__icon{
                position: absolute;
                right:3px;
            }

            .accordion-button:not(.collapsed)::after {
                width: auto;
                height:auto;
                //background:red;
                //border-radius:50%;
                //margin-bottom: 30px;
                content: "-";
                font-size: 48px;
                color: #F6F6F6;
                
                transform: translate(-5px, -4px);
                transform: rotate(0deg);
            }
            .header{
                font-size: 16px;
                color:#AFAFAF;
                font-weight: bold;
            }
            .botton_btn{
                bottom:-8px; 
                color:#FFFFFF;  
            }
            .botton_btn_help{
                background:#8497CE;
                left:-12px;
                height:45px;
            }
            .botton_btn_change{
                background:#6379B9;
                margin-left:90px;
                border-radius: 0px 0px 20px 0px;
                width:211px;
                height:45px;
            }
            
        
        }
        .untitle__page{
            background:#F4F4F4;
            
            .right-block{
               // background:#FFFFFF;
                border-radius: 0px 20px 20px 0px;
                background:#FFFFFF;
                height:38px;
                right:0;
                top:7px
            
                
            }
            .noti{
                margin-left:-41px;
            }
            .user{
                position:relative;
                top:-23px;
            }
            .upgrade{
                position:absolute;
                right:200px;  
                color:#000000;
                &-btn___link{
                    color:#000000;
                    background:#FFFFFF;
                    font-size:12px;
                    border:1px solid #FFFFFF;
                }                
                    
            }
            .button_text_section{
                position:relative;
                background:#FFFFFF;
                left:-15px; 
                top:20px;
                height:70px;
               
                &_button-color{
                    background:#C4C4C4;
                    
                     
                }
                &__text_image {
                    background:#FFFFFF;
                    
                    
                    
                    
                }
                .section_2{
                    background-color:#E5E5E5;
                    border-radius: 10px 0px 0px 10px;
                    
                        
                }
                .background_color{
                    background:#D12551;
                    width: 25px;
                    height: 25px;
                    border-radius:50%;
                    font-size:10px;
                    
                }
                .option{
                    background:#EF4873;
                    width: 25px;
                    height: 25px;
                    border-radius:50%;
                }
                .selection{
                    background:#FFCAD8;
                    width: 25px;
                    height: 25px;
                    border-radius:50%;
                    
                }
                .progress__bar{
                    background:#313F68;
                    width: 25px;
                    height: 25px;
                    border-radius:50%;
                    
                    
                }
                .button{
                    background:#6379B9;
                    width: 25px;
                    height: 25px;
                    border-radius:50%;
                }
                
    
            }
            .untitlequiz{
                background:#FFFFFF;
                height:550px;
            }
            .power-by{
                right:13px;
                bottom:12px;
            }
            .remove_logo{
                bottom:65px;
                right:50px;
            }
                
                 

        }
        
    }
 </style-->
 <!--template>
    <div class="untitlequiz__page d-flex "> 
       <div class="mt-5 untitle__page fixed">
              <Navbar />
        </div> 
        <div class="collection__section px-5">
                     
          <Colorselection />
        </div>
        <div class="">
          <div class="pt-5 mt-5">
            <div class="">
                  <Giveawaysidebar />
            </div>
            
              <div class="d-flex justify-content-center align-items-center">    
                <div class="remove_logo mx-5 position-absolute text-center">
                    <img src="@/assets/images/remove logo.png">
                </div>
                <div class=" power-by mx-5 position-absolute text-center">
                    <img src="@/assets/images/powered by.png">
                </div>
              </div>
              
          
                  
          </div>
        </div>
        
           
             
            
              
            
            
        
        
            
    </div>
</template-->
<template>
  <div class="untitlequiz__page" align-v="stretch">
   <div class="ri">
    
         <Navbar />
           
   
   </div>
    <b-row> 
       
        <b-col cols="12" md="4">
          <div class="pt-5 mt-5">
                  <Giveawaysidebar />
          </div>
        </b-col>
        <b-col cols="12" md="8">
          
            <div class="pt-5 mt-5">
               
              <Colorselection />
            </div>
            <div class="mt-5" >
              <div class="mt-5">
                <div class="mt-5">
                  <div class="">
                    <div class="untitlequiz mt-5">
                      <div class="untitle__giveaway mx-5">
                        <div class="d-flex justify-content-center align-items-center">
                          <span class="text-center untitle__giveaway__heading">UNTITLED GIVEWAY</span>
                        </div>
                      </div>
                      <div class="frame mx-5">
                        <input type="button"  class="input-file" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <p>
                          <img  height="" src="@/assets/sidebars/Image.png">
                        </p>
                      </div>
                      <div class="mx-5 mt-3">
                        <input type="text" class="input_description" placeholder="Type discription here" />
                      </div>
                        <div class="time__left mx-5 p-1 mt-3">
                          <div class="d-flex justify-content-center align-items-center">
                            <span class="text-center heading">Time Left to Enter</span>
                          </div>
                      </div>
                      <b-row class="mx-5 px-5 mt-4">
                        <b-col>
                          <b-form-group class="counter__label" label="Days">
                            <div class="counter  mx-5" placeholder="01">
                                 {{ days % 365 }}
                            </div>
                          </b-form-group>
                        </b-col>
                        <b-col>
                          <b-form-group class="counter__label" label="Hours">
                            <div class="counter  mx-5" placeholder="00"> 
                                {{ hours % 24 }}
                            </div>
                          </b-form-group>
                        </b-col>
                        <b-col>
                          <b-form-group class="counter__label" label="Minutes">
                            <div class="counter   mx-5" placeholder="00">
                                {{ minutes % 60 }}
                            </div>
                          </b-form-group>
                        </b-col>
                        <b-col>
                          <b-form-group class="counter__label" label="Seconds">
                            <div class="counter   mx-5" placeholder="00">
                                 {{ seconds % 60 }}
                            </div>
                          </b-form-group>
                        </b-col>


                      </b-row>
                        <b-form>
                            <div class="px-5">
                                <b-form-group label="Email" class="email mx-5 mt-3 px-5">
                                
                                </b-form-group>
                           </div>
                            <div class="mx-5 px-5">
                                <b-form-input class="email__input" placeholder="Email">
                                </b-form-input>
                            </div>
                            <div class="email__check mx-5 mt-3">
                                <b-form-checkbox-group class="px-5">
                                    <b-form-checkbox class="" size="small"> <span class="email__check__info">I agree to the Terms and Conditions</span></b-form-checkbox>
                                   
                                </b-form-checkbox-group>
                            </div>
                            <div class="d-flex justify-content-center align-items-center mt-3">
                                <b-button variant="clear" class="btn__click"><span class="btn__click__heading">CLICK TO ENTER</span></b-button>
                            </div>
                          
                        </b-form>
                     </div>
                     <div class="d-flex justify-content-center align-items-center mt-2">    
                        <div class="remove_logo position-absolute text-center">
                            <img src="@/assets/images/remove logo.png">
                        </div>
                    <div class=" power-by mx-5 position-absolute text-center">
                        <img src="@/assets/images/powered by.png">
                    </div>
                </div>
                <div class="position-absolute addto__fill">
                    <b-button variant="clear"><span class="add__forms">ADD TO FORMS FILL</span></b-button>
                </div>
             </div>
                </div>
              </div>
            </div>

        </b-col>
    </b-row>
    
  </div>
</template>
<script>
    
    import Giveawaysidebar from '../components/Giveawaysidebar.vue'
    import Navbar from '../components/Navbar.vue'
    import Colorselection from '../components/Colorselection.vue'
    //import Quizbutton from '../components/Quizbutton.vue'
    //import Quizresult from '../components/Quizresult.vue'
    import { ref } from '@vue/reactivity'
    export default {
        name: 'Quizeditor',
        components: { Giveawaysidebar, Navbar, Colorselection/*Quizbutton,*/},
        data() {
            const days = ref(0);
            const hours = ref(0);
            const minutes = ref(0);
            const seconds = ref(0); 
            const lunchDate = new Date('30 December 2032');

            setInterval(() =>{  
                const currentDate = new Date();
                const lunchTime = lunchDate - currentDate;

                seconds.value = parseInt(lunchTime / 1000);
                minutes.value = parseInt(seconds.value / 60);
                hours.value = parseInt(minutes.value / 60);
                days.value = parseInt(days.value / 24)

            }, 1000);
            return { days, hours, minutes, seconds}
        },
 

    }
   
</script>
 <style lang="scss" scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');
  
        .untitlequiz__page{
            background:#F4F4F4;
            height:1300px;
            overflow-x: hidden;
            overflow-y: hidden;
            
            .right-block{
               // background:#FFFFFF;
                border-radius: 0px 20px 20px 0px;
                background:#FFFFFF;
                height:38px;
            
                right:0;
                top:40px;
                

            
                
            }
            .noti{
                margin-left:-41px;
            }
            .user{
                position:relative;
                top:-23px;
            }
            .upgrade{
                position:absolute;
                right:200px;  
                top:-40px;
                color:#000000;
                &-btn___link{
                    color:#000000;
                    background:#FFFFFF;
                    font-size:12px;
                    border:1px solid #FFFFFF;
                }                
                    
            }
            
            .quizbutton{
                top:-415px;
            }
            .untitlequiz{
                background:#FFFFFF;
              
                min-height:1100px;
                width:800px;
                font-family: 'Roboto', sans-serif;
               
                
                
                
                
               
                
            }
            .untitle__giveaway{
              background:#F6F6F6;
              
              border-radius: 10px;

              &__heading{
                color:#2B2B2B;
                font-family: 'Roboto', sans-serif;
                font-weight:500;
                font-size:22px;
              }
            }
            .power-by{
              
                bottom:100px;
                right:450px;
                
            }
            .remove_logo{
                bottom:165px;
                right:550px;
                

        
            }
            .collection__section{
              position:fixed;
              
              
            }
             .input-file {
              opacity: 0;
              width: 100%;
              //height: 200px;
              //position: absolute;
              cursor: pointer;
        } 
        .frame {

 
            background: #D9D9D9;
            color: dimgray;
            padding: 10px 10px;
            margin-top:20px;
            min-height: 200px; 
            //position: relative;
            cursor: pointer;
            border-radius: 10px;
            p {
                font-size: 1.2em;
                text-align: center;
                padding: 50px 0;
 
            }
        }
        .input_description{
            width:100%;
            background: #F7F7F7;
            border-radius: 10px;
            border:1px solid #F7F7F7;
            opacity:1;
            height:40px;
            color:#D9D9D9;
        }
        .input_description::placeholder{
            text-align:center;
        }
        .time__left{
          background-color:#F6F6F6;
          color:#3D3D3D;
        }
        .counter{
          top:0;
          width:40%;
          height:40px;
          //background-color: #F6F6F6;
          background: #F7F7F7;
          border-radius: 10px;

        }
        .counter::placeholder{
          color:#000000;
          font-weight:400;
          font-family:'Roboto', sans-serif;
          font-size:24px;
          margin-top:10px;
        }
        .counter__label{
          color:#000000;
          font-style:italic;
          font-weight:400;
          font-size:12px;
          font-family:'Roboto', sans-serif;
          margin-top:5px;
        }
        .email{
          background: #FFFFFF;
          box-shadow: 0px 4px 20px -8px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .email__input{
            background-color:#F6F6F6;
            border: 0.5px solid #C4C4C4;
            border-radius: 10px;
           
        }
        .email__input::placeholder{
            color:#C4C4C4;
            margin-left:20px;
        }
        .email__check{
            background: #FFFFFF;
            box-shadow: 0px 4px 20px -8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            &__info{
                font-weight: 400;
                font-size: 14px;
                font-weight:'Roboto', sans-serif;
                    
            }
                    
        }
        .btn__click{
            background: #F67899;
            box-shadow: 0px 4px 20px -4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            width:250px;
            margin-top:50px;
            &__heading{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                color:#FFFFFF
            }
        }
        .addto__fill{
            right:280px;
            bottom:20px;
            background-color:#EF4873;
            background: #EF4873;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
        } 
        .add__forms{
            color: #FFFFFF;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
        }  
    }
        
        
    
 </style>

