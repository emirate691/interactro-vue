<template>
    <div class="untitlequiz__page__sidebar vh-100">  
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
                                       <router-link to="/Quizeditor" class="thank"> <img src="@/assets/sidebars/lette_a.png">  UNTITLED GIVEAWAY </router-link>
                                    </div>          
                                </div>
                            </div>
                        </div>

                        
                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                    <img class="pr-3" src="@/assets/sidebars/success.png">SUCCESS PAGE
                                </button>
                            </h2>
                            <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
                                    <div class="mx-5">
                                       <router-link to="/" class="thank"> <img src="@/assets/sidebars/lette_a.png" class="" /><span class="mx-2">Thank You For Enteri...</span></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion mb-3">
                            <h2 class="header">
                                <!--button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4"-->
                                    <img class="pr-3" src="@/assets/sidebars/envelope.png">LEAD GENERATION<span class=""><Giveawaytoggle /></span>
                                <!--/button-->
                            </h2>
                            <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
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
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="botton_btn position-absolute justify-content-center align-items-center ">
                    
                
                <div class="botton_btn_help  text-center">
                     <div class="mt-3">
                        <img class="" src="@/assets/sidebars/help.png">
                        <span class="ml-2   botton_btn_help_para">HELP</span>
                    </div>
                </div>
                <div class="botton_btn_change position-relative pl-3 ">
                    <div class="mt-3 pt-3">
                        <img  class="" src="@/assets/sidebars/Swap.png">
                        <span class="ml-2  botton_btn_change_type">CHANGE QUIZ TYPE</span>
                    </div>
                </div>
                        
                
                    
                    

            </div>
            

        </div>  
    

        
        
</template>
<script>
import Giveawaytoggle from '../components/Giveawaytoggle.vue'
export default {
    components: { Giveawaytoggle }
    
}
</script>
<style lang="scss" scoped>
.untitlequiz__page{
    &__sidebar{
        position:fixed;
        background:#313F68;  
        width:301px;
        margin-top:-97px;
        margin-left:0px;
        border-radius: 0px 20px 20px;
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
            .accordion-button-1:not(.collapsed) {
            background:#313F68;   
            color: #FFFFFF;
            background: #D12551;
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
            //width: auto;
            //height: auto;
            content: "+";
            font-size: 20px;
            background-image: none;
            width:25px;
            height:25px;
            padding: 0px;
            border-radius:100%;
            border: 1px solid #AFAFAF;
            font-weight: 100;
            color: #AFAFAF;
            text-align:center;
            transform: translateY(-4px);
        }
        .accordion-button-1::after {
            //width: auto;
            //height: auto;
            content: "+";
            font-size: 40px;
            background-image: none;
            width:25px;
            height:25px;
           // padding: 0px;
            border-radius:100%;
            border: 1px solid #AFAFAF;
            font-weight: 100;
            color: #AFAFAF;
            transform: translateY(-4px);
        }
        .accordion-button:not(.collapsed)::after {
            
            
            content: "-";
            font-size: 20px;
            color: #F6F6F6;
            
            transform: translate(-5px, -4px);
            transform: rotate(0deg);
        }
            .accordion-button:not(.collapsed)::after {
           
            width: 25px;
            height: 25px;
            border: 1px solid #FFFFFF;
            content: "-";
            font-size: 20px;
            color: #F6F6F6;
            text-align: center;
            transform: translate(-5px, -4px);
            transform: rotate(0deg);
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
        .accordion-button-1:not(.collapsed)::after {
            width: auto;
            height:auto;
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
            bottom:0px; 
            color:#FFFFFF;  
            
        }
        .botton_btn_help{
            background:#8497CE;
            left:0px;
            height:45px;
            top:16px;
            position:absolute;
            width: 100px;
            
        }
        .botton_btn_change{
            background:#6379B9;
            margin-left:90px;
            border-radius: 0px 0px 15px 0px;
            width:211px;
            height:45px;
        }
        .move__icon{
            position: absolute;
            left:3px;
        }
        .setting__icon{
            position: absolute;
            right:3px;
        }
        .thank{
            color:#490819;
            font-family:'Roboto', sans-serif;
            font-weight:400;
            font-size:13px;
        }
        
    
    }
}

</style>