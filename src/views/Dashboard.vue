
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
