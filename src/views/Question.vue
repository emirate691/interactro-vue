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
                                </div>
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
 <template>
    <div class="untitlequiz__page d-flex "> 
       

        <b-col class="untitle__page fixed">
           
            <div class="col-12 pt-5">
                <Navbar />
            </div>  
             <div class="pt-5 mt-3">
                <SideBars />
            </div>
            <div class="container position-absolute untitlequiz col-8">
                
                <div class=" p-5">
                    <Quiz />
                     
                    
                    
                    <div class="quizbutton position-relative">
                        <Quizbutton />
                    </div>
                   
                </div>
                <div class="remove_logo mx-5 position-absolute ">
                    <img src="@/assets/images/remove logo.png">
                </div>
                <div class=" power-by mx-5 position-absolute ">
                    <img src="@/assets/images/powered by.png">
                </div>
            </div>
            
        </b-col>
        
            
    </div>
</template>
<script>
    import Quiz from '../components/quiz/Quiz.vue'
    import SideBars from '../components/SideBars.vue'
    import Navbar from '../components/Navbar.vue'
    import Quizbutton from '../components/Quizbutton.vue'
    //import Quizresult from '../components/Quizresult.vue'
    export default {
        name: 'Quizeditor',
        components: {SideBars, Navbar, Quiz, Quizbutton,}
    }
   
</script>
 <style lang="scss" scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');

        .untitle__page{
            background:#F4F4F4;
            height:800px;
            
            .right-block{
               // background:#FFFFFF;
                border-radius: 0px 20px 20px 0px;
                background:#FFFFFF;
                height:38px;
            
                right:0;
                top:-40px;
                

            
                
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
            .button_text_section{
                position:relative;
                //background:#FFFFFF;
                left:82px; 
                top:20px;
               
               
                &_button-color{
                    background:#C4C4C4;
                    
                    
                    
                     
                }
               
                .section_2{
                    background-color:#E5E5E5;
                    border-radius: 10px 0px 0px 10px;
                    
                    
                        
                }
                .section-3{
                    background-color:#FFFFFF;
                   
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
                    width:25px;
                    height: 25px;
                    border-radius:50%;
                    
                }
                .progress__bar{
                    background:#313F68;
                    width: 25px;
                    height:25px;
                    border-radius:50%;
                    
                    
                }
                .button{
                    background:#6379B9;
                    width: 25px;
                    height: 25px;
                    border-radius:50%;
                }
                
    
            }
            .quizbutton{
                top:-415px;
            }
            .untitlequiz{
                background:#FFFFFF;
                height:750px;
                font-family: 'Roboto', sans-serif;
                top:150px;
                left:400px;
                
            }
            .power-by{
                right:13px;
                bottom:10px;
            }
            .remove_logo{
                bottom:65px;
                right:50px;
            }
            
                
            
           
        }
        
        
    
 </style>

