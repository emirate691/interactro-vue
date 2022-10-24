<!--template>
    <b-row class="untitlequiz__page h-100  w-100 d-flex" align-v="stretch"> 
        <b-col cols="12" class="d-flex justify-content-right align-items-right">
            <Navbar />
        </b-col>
                
        <b-row>
        <b-col class="untitle__page">
           
            
             <div class="pt-5 mt-3">
                <SideBars />
            </div>
            <div class="container position-absolute untitlequiz col-sm-12 col-lg-8 col-md-8">
                
                <div class="pt-3 p-5 col-sm-12 col-lg-12 col-md-12">
                    <Untitlequizs />
                </div>
                <div class="remove_logo mx-5 position-absolute  d-none d-md-block">
                    <img src="@/assets/images/remove logo.png" class="">
                </div>
                <div class=" power-by mx-5 position-absolute ">
                    <img src="@/assets/images/powered by.png">
                </div>
            </div>
            
        </b-col>
        </b-row>
            
    </b-row>
</template-->

<template>
    <b-row class="quizpage_editor vh-100 w-100"  align-v="stretch">
        <b-row>
            <b-col cols="" class="quizpage_editor-left-section">
                <div class="">
                    <SideBars />
                </div>
            </b-col>
            <b-col cols="9" class="quizpage_editor-right-section">
                <b-row class="">
                    <div>
                        <Navbar />
                    </div>
                    <div class=" p-5 m-5 quizpage_editor-right-section__untitlequiz">
                        <Untitlequizs />
                    </div>
                </b-row>
               
            </b-col>
        </b-row>
    </b-row>
</template>
<script>
    import Untitlequizs from '../components/quiz/Untitlequizs.vue'
    import SideBars from '../components/SideBars.vue'
    import Navbar from '../components/Navbar.vue'
    export default {
        name: 'Quizeditor',
        components: { Untitlequizs, SideBars, Navbar }
    }
   
</script>
 <style lang="scss" scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');

        /*.untitle__page{
            
           
            
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
            .untitlequiz{
                background:#FFFFFF;
                height:500px;
                font-family: 'Roboto', sans-serif;
                bottom:100px;
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
            
                
            
           
        }*/
        
    .quizpage_editor{
       position:relative;
       background-color: #D12551;
        &-right-section{
            
            min-height:100vh;
            &__untitlequiz {
                position:absolute;
                bottom:0;

            }
        }
        

    }   
    
 </style>
