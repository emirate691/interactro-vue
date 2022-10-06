<!--template>
    <div class="engagement-page h-100">
        <div class="engagement-page_header">
            <Header />
        </div>
        <div class="p-5 m-5">
            <div class=" engagement-page_details d-flex justify-content-center align-item-center pt-5">
                <div class="pt-5">
                    <h3 class="font-weight-bolder mx-3">What type of poll would you like to create?</h3>
                    <p class="text-center">You can change poll type at any time.</p>
                </div>
            </div>
            <div class=" engagement-page_card d-flex justify-content-left  m-5 p-2">
                <b-row class="p-3 mx-auto">
                    <b-col class="col-sm-12 col-lg-6 col-md-6 p-3">
                        <div class="engagement-page_card_1 m-2">
                            <div class="engagement-page_card_1-image">
                        
                                <img class="m-5 p-4 engagement-page_card_1-image-trophy-bg" src="@/assets/polls/grid_poll_image.png" /> 
                                                           </div>
                            <div class="engagement-page_card_quiz justify-content-center align-items-center text-center p-0 m-0">
                        
                                <h6 class="pb-5">Grid Poll</h6>
                    
                            </div>
                        </div>

                
                    </b-col>
                    <b-col class="col-sm-12 col-lg-6 col-md-6 p-3">
                        <div class="engagement-page_card_2 m-2">
                            <div class="engagement-page_card_2-image">
                                <img class=" engagement-page_card_2-image-polls-bg m-5 p-4" src="@/assets/polls/poll_list_image.png" />
                            </div>
                            <div class=" engagement-page_card_polls justify-content-center align-items-center text-center">
                            <h6 class="pb-5"> List Poll</h6>
                            </div>
                        </div>

                    </b-col>
                
                
                </b-row>
            </div>
        </div>
  
    </div>
  
   

</template>
<script>
import Header from '../components/Header.vue'
export default {
    name:"EngagementType",
    components:{ Header },
}
</script>
<style lang="scss" scoped>
    .engagement-page{
    background: #F6F6F6;
    //position:absolute;  
    margin-top:-70px;
   

    &_card{
      &_quiz{
        position: relative;
        color:#F6F6F6;
        margin-top:-50px;
        
      }
      &_polls{
        color:#3D3D3D;
      }
      &_giveaways{
        color:#000000;
        
      }

    }
      &_card_1{
        background:#FFFFFF;
        box-shadow: 0px 22px 53px 6px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width:200px;
        height:270px;
        &-image{
          &-trophy-bg{
            background-image: url('../assets/polls/gid_poll_bg.png');
            background-repeat: no-repeat;
          }
          
        }
      }
      &_card_2{
         background:#313F68;
        box-shadow: 0px 22px 53px 6px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width:200px;
        &-image{
          &-polls-bg{
             background-image: url('../assets/polls/poll_list_bg.png');
             background-repeat: no-repeat;
          }
      }
      }
      
      
    p{
      font-size: 22px;
    }

 }

</style-->

<template>
    <div class="login__page-container">
        <div class="login__page-container-content pt-0" sm="6">
            <div class="login__page-container-content-left mt-0 h-100">
                <div class="left-block ml-auto">
                    <div class="">
                        <div class="">       
                            <Dashboardheader/>
                     
                            
                    <div class="m-5 dashboard__container__form">
                    <b-row>
                        <b-col>
                            <div class="dashboard__container__form-left-block justify-content-left align-items-left text-left">
                            
                            <span class="quizzes mx-3"> Quizzes</span>
                            </div>
                            </b-col>
                        <b-col>
                            <div class="dashboard__container__form-right-block justify-content-right align-items-right text-right">
                                    <b-button
                                    class="create-btn"
                                    to="/template"
                                    >
                                        + CREATE QUIZ
                                    </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                    
                        </div>  

                    </div>
                </div>

            </div>
            <div class="login__page-content-right  h-100 col-12">
                <div class="dashboard_items">
                    <Dashboarditems />
                 </div>
                
            </div>

        </div>

    </div>
    
</template>
<script>
import Dashboardheader from '../components/Dashboardheader.vue'
import Dashboarditems from '../components/Dashboarditems.vue'

export default {
    name: "LoginForm",
    components: { Dashboardheader, Dashboarditems },
    data(){
        
        return {
            
            login: {
                email: "",
                password: ""
            },
             
            showPassword:false
        }
    },
    
       
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

    .login__page-container {
        background: #fff;    
        height: 100%;
        min-height: 100vh;
        &-content {
        
            height: 100%;
            min-height: 100vh;
            //@include poppins-font;
        
        
            &-left {
                height: 350px;
                background-color:#FFFFFF; 
            }
                
            .login__page-content-right{
                background-color:#F6F6F6;
                position:relative;
                top:-45px;
            }
            .create-btn{
                background: #EF4873;
                border:1px solid #EF4873
            }
            .quizzes{
                font-family:'Roboto';
                font-style:normal;
                font-weight: 700;
                font-size:30px;
            }
            
        }
        
    }
</style>
