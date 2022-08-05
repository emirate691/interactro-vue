<template>
    <div class="sidebar_page col-3 vh-100">
        <!--div class="sidebar_page_content">
            
            <div class="">
                <router-link to="/">
                    <img  class="m-3 px-3"  src="@/assets/headers/dashboard_logo.png">
                </router-link>
            </div>
            <nav class="pt-5">
                <ul class="nav flex-column">
                    <li class="pl-3 pb-4 ">
                        <router-link   data-ds-toggle="collapse" class="nav_list_item">
                            <div class="d-flex align-items-center">
                                         
                             </div>
                        </router-link>
                        
                    </li>
                    <li class="pl-3 pb-4 ">
                       <router-link  class="nav_list_item_2" to="/">
                            <div class="d-flex align-items-center">
                              <span class=""> 
                                <img src="@/assets/sidebars/question.png">
                                <span class="ml-3">QUESTIONS</span>
                                </span>
                             </div>
                        </router-link> 
                    </li>
                    <li class="pl-3 pb-4 ">
                        <router-link   class="nav_list_item_2" to="/">
                            <div class="d-flex align-items-center">
                              <span class=""> 
                                <img src="@/assets/sidebars/result__image.png">
                                <span class="ml-3">RESULTS</span>
                                </span>
                             </div>
                        </router-link>

                    </li>
                    <li class="pl-3 pb-4 ">
                        <router-link  class="nav_list_item_2" to="/">
                            <div class="d-flex align-items-center">
                              <span class=""> 
                                <img src="@/assets/sidebars/envelope.png">
                                <span class="ml-3">LEAD GENERATION</span>
                                </span>
                             </div>
                        </router-link>
                    </li>
                    <li class="pl-3 pb-4 ">
                        <router-link   class="nav_list_item_2" to="/">
                            <div class="d-flex align-items-center">
                              <span class=""> 
                                <img src="@/assets/sidebars/share.png">
                                <span class="ml-3">SOCIAL SHARE SETTINGS</span>
                                </span>
                             </div>
                        </router-link>
                    </li>
                    <li class="pl-3 pb-4 ">
                        <router-link   class="nav_list_item_2" to="/">
                            <div class="d-flex align-items-center">
                              <span class=""> 
                                <img src="@/assets/sidebars/Tracking.png">
                                <span class="ml-3">CONVERSION TRACKING</span>
                                </span>
                             </div>
                        </router-link>
                    </li>

                </ul>

            </nav>
            
            
        </div>
        <div class="botton_btn position-absolute d-flex ">
                
            
            <div class="botton_btn_help position-absolute">
                <div class="p-3">
                    <img class="pl-3 " src="@/assets/sidebars/help.png">
                    <span class="ml-2   botton_btn_help_para">HELP</span>
                </div>
            </div>
    
                    
            <div class="botton_btn_change pl-2">
                <div class="p-3">
                    <img  class="pl-5 ml-5 " src="@/assets/sidebars/Swap.png">
                    <span class="ml-2  botton_btn_change_type">CHANGE QUIZ TYPE</span>
                </div>
            </div>
                
                

        </div-->
        
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
                            COVER
                            </button>
                        </h2>
                        <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                QUESTIONS
                            </button>
                        </h2>
                        <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div class="accordion-body">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            RESULTS
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
                            LEAD GENERATION
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
                            SOCIAL SHARE SETTINGS
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
                             CONVERSION TRACKING
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
        <div class="botton_btn_help position-absolute">
                <div class="p-3">
                    <img class="pl-3 " src="@/assets/sidebars/help.png">
                    <span class="ml-2   botton_btn_help_para">HELP</span>
                </div>
            </div>
    
                    
            <div class="botton_btn_change pl-2">
                <div class="p-3">
                    <img  class="pl-5 ml-5 " src="@/assets/sidebars/Swap.png">
                    <span class="ml-2  botton_btn_change_type">CHANGE QUIZ TYPE</span>
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
        
        .accordion-collapse {
        border: 0;
        
        }
        .accordion-button {
            padding: 0px;
            font-weight: bold;
            border: 0;
            font-size: 18px;
            color:#AFAFAF;
            text-align: left;
            background:#313F68;
            
            
            
        }
        .accordion-button:focus {
            box-shadow: none;
            border: none;
        }
        .accordion-button:not(.collapsed) {
            background: none;
            color: #dc3545;
        }
        .accordion-body {
            padding: 15px;
            
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
            height: auto;
            background-image: none;
            content: "-";
            font-size: 48px;
            transform: translate(-5px, -4px);
            transform: rotate(0deg);
        }
    

        
    }
    
 
</style>