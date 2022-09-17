<template>
<div>
    <b-container fluid>
        <div class="template__page h-100">
            <div class="template__page__content">
                
                <b-row>
                    <b-col class="template__page__content__sidebar">
                        <div class="left-block template__page__content-header_logo ">
                            <img class="mx-5 my-3" src="@/assets/headers/dashboard_logo.png">

                        </div>
                        <div class="mx-3 mt-5 pt-5">
                            <h4 class="mx-3">What's your goal</h4>
                            <b-nav class="mt-5 template__page__content__nav">
                                <div class="mt-3 template__page__content__nav_link mb-2">
                                    <b-nav-link class="mx-3 template__page__content__nav-item">Browse All</b-nav-link>
                                </div>
                                <div class="mt-3 template__page__content__nav_link mb-2">
                                    <b-nav-link class="mx-3 mt-3 template__page__content__nav-item">Audience Research</b-nav-link>
                                 </div>
                                <div class="mt-3 template__page__content__nav_link mb-2"> 
                                    <b-nav-link class="mx-3 mt-3 template__page__content__nav-item">General Leads</b-nav-link>
                                </div>
                                <div class="mt-3 template__page__content__nav_link mb-2">
                                    <b-nav-link class="mx-3 mt-3 template__page__content__nav-item">Just for Fun</b-nav-link>
                                </div>
                                <div class="mt-3 template__page__content__nav_link mb-2">
                                    <b-nav-link class="mx-3 mt-3 template__page__content__nav-item">Segment my Audience</b-nav-link>
                                </div>
                                <div class="mt-3 template__page__content__nav_link">
                                    
                                    <b-nav-link class="mx-3 mt-3">Test Their Knowledge</b-nav-link>
                                </div>
                                <div class="mt-3 template__page__content__nav_link">
                                    <b-nav-link class="mx-3 mt-3 template__page__content__nav-item">Start from Scratch</b-nav-link>
                                </div>
                                
                            </b-nav>
                        </div>
                    </b-col>
                    <b-col class="template__page__content__main__content col-9">
                        <div class="template__page__right-block mx-auto d-flex justify-content-end position-absolute">
                            <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" no-caret>
                                <template #button-content>
                                    <b-avatar
                                        size="2rem"
                                    />
                                    <span class="mx-2">user name</span>
                                    <span class="">
                                        <img class="px-3" src="@/assets/headers/dropdown_arrow.png" alt="dropdown">
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
                                    <img class=""  src="@/assets/icons/notification.svg" alt="">
                                </template>
                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                <b-dropdown-item href="#">Another action</b-dropdown-item>
                            </b-dropdown>
                
                        </div>
                        <div class="m-5 p-5">
                            <b-row class="">
                                <b-col class="">
                                    <b-form-label class="font-weight-bolder">
                                        Sort by :
                                    </b-form-label>
                                    <div class="">
                                        <b-form-group >
                                            <b-form-radio-group
                                                v-model="selected"
                                                :options="options"
                                                class="mb-3"
                                                value-field="item"
                                                text-field="name"
                                                
                                            
                                            >
                                            </b-form-radio-group>
                                        </b-form-group>
                                    </div>
                                </b-col>
                                <b-col>
                                   <b-form-group>
                                        <b-form-input
                                        class="w-50 all_quiz_type"
                                        v-model="search"
                                        placeholder="All Quiz Types"
                                        
                                        >
                                       
                                        </b-form-input>
                                         <img  class=" all_quiz_type-icon position-absolute" src="@/assets/headers/dropdown_arrow.png">
                                        </b-form-group>  
                                </b-col>
                            </b-row>
                        </div>
                        <div class="">
                            <b-row class="justify-content-center align-items-center text-center"> 
                                <b-col class="">
                                    <div class="how_much text-center mt-3">
                                        <h6 class="how_much_header  pt-5">How much do you know about history?</h6>
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <img class="" src="@/assets/images/warrior.png">
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <p class="pt-5 px-5">brainy history fan we bet you'll know about all the coolest bits! Test your trivia now!</p>
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <b-button class="mb-5 how_much_header_quiz-btn">TAKE THE QUIZ</b-button>
                                        <div class="how_much_header_quiz-btn_power-by position-absolute">
                                            <span class="">
                                                <p class="">Powered by <span><img src="@/assets/images/Logo main 2.png"></span></p>
                                                
                                            </span>
                                        </div>
                                    </div>
                                </b-col>
                                 <b-col class="col-6">
                                     <div class="how_much_btn-container p-5 my-5">
                                        <div class="mt-5">
                                            <b-button class="mt-2 how_much_btn-container_template-btn mb-2">
                                                Use Template
                                            </b-button>
                                        </div>
                                        <div class="my-4">
                                            <b-button class=" how_much_btn-container_template-btn_white mt-2 mb-5">
                                                Preview
                                            </b-button>
                                        </div>
                                    
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-center align-items-center text-center">
                                 <b-col class="col-6 mt-5">
                                     <div class="how_much">
                                        <h6 class="how_much_header pt-5">How much do you know about history?</h6>
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <img src="@/assets/images/warrior.png">
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <p class="px-5 pt-5">brainy history fan we bet you'll know about all the coolest bits! Test your trivia now!</p>
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <b-button
                                            class="mb-5 how_much_header_quiz-btn"
                                        >
                                            TAKE THE QUIZ
                                        </b-button>
                                        <div class="how_much_header_quiz-btn_power-by position-absolute">
                                            <span class="">
                                                <p class="">Powered by <span><img src="@/assets/images/Logo main 2.png"></span></p>
                                                
                                            </span>
                                        </div>
                                    </div>
                                </b-col>
                                 <b-col class="col-6 mt-5">
                                    <div class="epic_container justify-content-center align-items-center text-center">
                                        <h6 class="epic_container_header  pt-5">Why not test your knowledge in this epic trivia challenge?</h6>
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <img class="" src="@/assets/images/epic.png">
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        
                                        <p class="pt-5 px-5">brainy history fan we bet you'll know about all the coolest bits! Test your trivia now!</p>
                                        <div class="mx-5 position-absolute info">
                                            <img src="@/assets/icons/info.png">
                                        </div>
                                        <b-button class="mb-5 epic_container_header_epic_btn">TAKE THE QUIZ</b-button>
                                        <div class="how_much_header_quiz-btn_power-by position-absolute">
                                            <span class="">
                                                <p class="">Powered by <span><img src="@/assets/images/Logo main 2.png"></span></p>   
                                            </span>
                                        </div>
                                        
                                    </div>
                                </b-col>
                               
                            </b-row>
                        </div>
                        
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-container>
</div>
</template>
<script>
  export default {
    data() {
      return {
        selected: 'A',
        options: [
          { item: 'A', name: 'Newest' },
          { item: 'B', name: 'Alphabetcal' },
         
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');
    .template__page{
       
         &__content{
            &__sidebar{
                 background:#FFFFFF;
                 position:sticky;
                 
            }
            &-header_logo{
                background:  #313F68;
                border-radius: 0px 20px 20px;
                margin-left:-15px;
                width:200px;
            }
            
            
            &__nav{
                color:#B8B8B8;
                font-size:22px;
                
                &_link {
                    &:hover{
                        
                    }
                }
                
            }
            
            .active{
                

                
                
            }
         }
         
         &__right-block{
            background: #FFFFFF;
            border-radius: 0px 20px 20px 0px;
            width:300px; 
            right:0px;  
            
         }
        
    }
    .template__page__content__main__content{
        background:#F6F6F6;   
    }
    .info{
        right:0
    }
    .radio_button{
        color: #fff !important;
        background-color: #28a745 !important;
        border-color: #28a745 !important;
    }
    .all_quiz_type{
        position:absolute;
        color:#353535;
        right:0;
        &-icon{
            right:10px;
            top:15px;
        }
    }
    
    .how_much{
        background:#FFE8EE;
        cursor:pointer;
        &_header{
            color:#D12551;
            &_quiz-btn{
                background: #EF4873;
                border: 1px solid #EF4873;
                &_power-by{
                    background:#DBE4FF;
                    border-radius: 0px 5px 0px 10px;
                    width:150px;
                    height:25px;
                    right:15px;
                    bottom:0px;
                }
            }
             
        }
        &_btn-container{
            background:#F1D9DFF2;
            &_template-btn{
            width:200px; 
            height:50px;
            background:#EF4873 ;
            
            border: 1px solid #EF4873;
                &_white{
                    width:200px;
                    height:50px;
                    background: #FFFFFF;
                    color: #D12551;
                    border:1px solid #D12551;
                    
                }
            }
           
        }

        
        
    }  
    .epic_container{
        background: #E5ECFF;
       
        cursor:pointer;
        &_header{
            color:#313F68;  
            &_epic_btn {
                background: #344E99;
            }
        }
        
    }
    
                    
</style>