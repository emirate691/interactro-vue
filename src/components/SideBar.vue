<template>
    <div class="sidebar_page col-3 vh-100 position-fixed">
        
        
        <div class="">
            <router-link to="/">
                <img  class="m-3 px-3"  src="@/assets/headers/dashboard_logo.png">
            </router-link>
        </div>
        <div class="row mt-5">
            <div class="col-md-12 ">
                <div class="accordion accordion-flush" id="faqlist">
                    <div class="accordion-item mb-3">
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

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                <img class="pr-3" src="@/assets/sidebars/question.png">QUESTIONS
                            </button>
                        </h2>
                        <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item mb-3">
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

                    <div class="accordion-item mb-3">
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

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                              <img class="pr-3" src="@/assets/sidebars/share.png">SOCIAL SHARE SETTINGS
                            </button>
                        </h2>
                        <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                <img class="pr-3" src="@/assets/sidebars/Tracking.png"> CONVERSION TRACKING
                            </button>
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
    
                    
            <div class="botton_btn_change pl-2">
                <div class="pt-3">
                    <img  class="pl-5 ml-5 " src="@/assets/sidebars/Swap.png">
                    <span class="ml-2  botton_btn_change_type">CHANGE QUIZ TYPE</span>
                </div>
            </div>
                
                

        </div>
        

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .sidebar_page{
        background:#313F68;
        width:300px;
        border-radius: 0px 20px 20px 0px;
        border-top-right-radius: 30px;
        
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
        .accordion-button:focus {
            box-shadow: none;
            border: none;
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
        .botton_btn{
            bottom:0; 
            color:#FFFFFF;  
        }
        .botton_btn_help{
            background:#8497CE;
            left:-15px;
        }
        .botton_btn_change{
            background:#6379B9;
            border-radius: 0px 0px 20px 0px;
        }
    

        
    }
    
 
</style>