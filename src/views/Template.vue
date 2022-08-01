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
                            <h4 class="mx-5">What's your goal</h4>
                            <b-nav class="mt-5 template__page__content__nav">
                                <b-nav-link class="mx-5 template__page__content__nav-item">Browse All</b-nav-link>
                                <b-nav-link class="mx-5 mt-3 template__page__content__nav-item active">Audience Research</b-nav-link>
                                <b-nav-link class="mx-5 mt-3 template__page__content__nav-item">General Leads</b-nav-link>
                                <b-nav-link class="mx-5 mt-3 template__page__content__nav-item">Just for Fun</b-nav-link>
                                <b-nav-link class="mx-5 mt-3 template__page__content__nav-item">Segment my Audience</b-nav-link>
                                <b-nav-link class="mx-5 mt-3 v">Test Their Knowledge</b-nav-link>
                                <b-nav-link class="mx-5 mt-3 template__page__content__nav-item">Start from Scratch</b-nav-link>
                                
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
                        <div class="mt-5 pt-5">
                            <b-row>
                                <b-col class="col-6">
                                    <div class="how_much">
                                        <h4 class="p-5">How much do you know about history?</h4>
                                        <img class="" src="@/assets/images/warrior.png">
                                        <p>brainy history fan we bet you'll know about all the coolest bits! Test your trivia now!</p>
                                        <b-button class="mb-5">tAKE THE QUIZ</b-button>
                                    </div>
                                </b-col>
                                 <b-col class="col-6">
                                     <div class="how_much">
                                        <div class="">
                                            <b-button class="m-5">
                                                Yes Template
                                            </b-button>
                                        </div>
                                        <div>
                                            <b-button class="m-5">
                                                Preview
                                            </b-button>
                                        </div>
                                    
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                 <b-col class="col-6 mt-5">
                                     <div class="how_much">
                                        <h4>How much do you know about history?</h4>
                                        <img src="@/assets/images/warrior.png">
                                        <p></p>
                                        <b-button
                                            class=""
                                        ></b-button>
                                    </div>
                                </b-col>
                                 <b-col class="col-6 how_much">
                                    <div class="">
                                        <img class="" src="@/assets/images/epic.png">
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
<style lang="scss" scoped>
    .template__page{
        
         &__content{
            &__sidebar{
                 background:#FFFFFF
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
                
            }
            .active{
                background: #3B5998;
                
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
    .how_much{
        background:#FFE8EE;
    }
   
                    
</style>