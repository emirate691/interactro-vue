<template>
    <div class="untitlequiz__page d-flex "> 
       

        <b-col class="untitle__page">
           
            <div class="pt-5">
                <Navbar />
            </div>
             <div class="pt-5 mt-3">
                <Pollsidebar />
            </div>
            <div class="container position-absolute untitlequiz col-8">
                
                <div class="pt-3 p-5">
                    <Untitlepoll />
                </div>
                <div class="justify-content-ceter align-items-center text-center">
                    <div class="remove_logo mx-5 position-absolute  text-center">
                        <img src="@/assets/images/remove logo.png">
                    </div>
                    <div class=" power-by mx-5 position-absolute   text-center">
                        <img src="@/assets/images/powered by.png">
                    </div>
                </div>
            </div>
            
        </b-col>
        
            
    </div>
</template>
<script>
    import Untitlepoll from '../components/Untitlepoll.vue'
    import Pollsidebar from '../components/Pollsidebar.vue'
    import Navbar from '../components/Navbar.vue'
    export default {
        name: 'Quizeditor',
        components: { Untitlepoll, Pollsidebar, Navbar }
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
            .untitlequiz{
                background:#FFFFFF;
                height:500px;
                font-family: 'Roboto', sans-serif;
                bottom:100px;
                left:400px;
            }
            .power-by{
                right:113px;
                bottom:10px;
            }
            .remove_logo{
                bottom:65px;
                //right:350px;
            }
            
                
            
           
        }
        
        
    
 </style>
