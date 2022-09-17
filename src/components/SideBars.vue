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
                                <div class="accordion-body mt-3">
                                    <div class="mx-5 ">
                                       <router-link to="/Quizeditor"> <img src="@/assets/sidebars/lette_a.png">  Untitled Quiz </router-link>
                                    </div>          
                                </div>
                            </div>
                        </div>

                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button-11 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                    <img class="pr-3" src="@/assets/sidebars/question.png">QUESTIONS
                                </button>
                            </h2> 
                            <div id="faq-content-2" class="accordion-collapse-1 collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body-1">
                                    <div class="mx-4">
                                        <b-link
                                            class="link "
                                            to="/Question"
                                        >
                                        <img class="pr-2 move__icon" src="@/assets/sidebars/move.png"> <img class="pr-2" src="@/assets/sidebars/question.png">  Question 1 <img class="mx-3 setting__icon" src="@/assets/sidebars/settings.png">
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-2"
                                             @click="addMore()"
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

                        <div class="accordion mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                    <img class="pr-3" src="@/assets/sidebars/result__image.png">RESULTS
                                </button>
                            </h2>
                            <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body-1">
                                    <div class="">
                                        <div class="mx-4">
                                        <b-link
                                            class="link "
                                            to="/Question"
                                        >
                                        <img class="pr-2 move__icon" src="@/assets/sidebars/move.png"> <img class="pr-2" src="@/assets/sidebars/result__image.png">  RESULT 1 <img class="mx-3 setting__icon" src="@/assets/sidebars/settings.png">
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-2"
                                             @click="addMore()"
                                        >
                                           <img class="pr-2" src="@/assets/sidebars/plus.png"> ADD NEW RESULT
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-2"
                                        >
                                           <img class="pr-2" src="@/assets/sidebars/redirect__image.png"> REDIRECT RESULT
                                        </b-link>
                                    </div>
                                    <div class="mx-4 mt-3">
                                        <b-link
                                            class="link mb-5"
                                        >
                                            BRANCHING LOGIC
                                        </b-link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3 mt-4">
                            <h2 class="header">
                                <!--button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4"-->
                                    <img class="pr-3" src="@/assets/sidebars/envelope.png">LEAD GENERATION<span class="pt-1"> <Toggle /></span>
                                <!--/button-->
                            </h2>
                            
                        </div>

                        <div class="mb-4">
                            <h2 class="header">
                                
                                <img class="pr-2" src="@/assets/sidebars/share.png">SOCIAL SHARE SETTINGS
                                
                            </h2>
                            
                        </div>
                        <div class="">
                            <h2 class="header">
                                
                                    <img class="pr-2" src="@/assets/sidebars/Tracking.png"> CONVERSION TRACKING
                                
                            </h2>
                            
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
    

        
        
</template>
<script>
 import Toggle from '../components/Toggle.vue'
export default {
    name : "sidebars",
    components:  { Toggle },
    data () {
        return {
            questions: [
        {
          questionname: "",
        },
         
        ],
        }

    },
    methods: {
        addMore() {
            this.questions.push({
            QuestionName: "",
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.untitlequiz__page{
    &__sidebar{
        position:fixed;
        background:#313F68;
        width:301px;
        margin-top:-110px;
        margin-left:-25px;
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
        .accordion-button-11 {
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
        
        .accordion-button-1:not(.collapsed) {
            background:#EF4873;
            color: #FFFFFF;
            //background: #EF4873;
            position:relative;
            left:-15px; 
            padding:20px;
            width:300px;
            
          
            
        }
         .accordion-button-11:not(.collapsed) {
            background:#EF4873;
            color: #FFFFFF;
            //background: #EF4873;
            position:relative;
            left:-15px; 
            padding:20px;
            width:300px;
          
            
        }
            .accordion-button-1:not(.collapsed) {
           /* background:#313F68;   
            color: #FFFFFF;
            background: #D12551;*/
        }
        .accordion-body {
            padding: 8px;
            background:#EF4873;
            position:relative;
            left:-15px; 
            width:300px;   
            text-decoration:none
            
        }
        .accordion-body-1{
            background:#243052;
            padding: 8px;
            position:relative;
            left:-15px; 
            width:300px;  
            
            
        }
        
        .accordion-button::after {
            width: 25px;
            height: 25px;
            content: "+";
            font-size: 25px;
            background-image: none;
            background:#FFFF;
            border-radius:100%;
            
            text-align:center;
            font-weight: 100;
            color: #AFAFAF;
            transform: translateY(-4px);
            
           
        }
        .accordion-button-1::after {
            width: 25px;
            height: 25px;
            content: "+";
            font-size: 25px;
            background-image: none;
            background:#FFFF;
            border-radius:100%;
            
            text-align:center;
            font-weight: 100;
            color: #AFAFAF;
            transform: translateY(-4px);
            position:absolute;
            right:30px;
           
        }
        .accordion-button-11::after {
            width: 25px;
            height: 25px;
            content: "+";
            font-size: 25px;
            background-image: none;
            background:#FFFF;
            border-radius:100%;
            
            text-align:center;
            font-weight: 100;
            color: #AFAFAF;
            transform: translateY(-4px);
            position:absolute;
            right:30px;
           
        }
        .accordion-button:not(.collapsed)::after {
            width: 25px;
            height:25px;
            
            content: "-";
            font-size: 48px;
            color: #F6F6F6;
            
            transform: translate(-5px, -4px);
            transform: rotate(0deg);
        }
           
            .link{
            color:#C4C4C4;
            font-weight: 400;
            font-size: 12px;
            background:#243052;
           text-decoration:none;
            
        }
        .accordion-button-1:not(.collapsed)::after {
            width: 25px;
            height:25px;
            content: "-";
            font-size: 28px;
            color: #F6F6F6;
            
            transform: translate(-5px, -4px);
            transform: rotate(0deg);
            position:absolute;
            right:15px;

        }
        .accordion-button-11:not(.collapsed)::after {
            width: 25px;
            height:25px;
            content: "-";
            font-size: 28px;
            color: #F6F6F6;
            
            transform: translate(-5px, -4px);
            transform: rotate(0deg);
            position:absolute;
            right:15px;

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
            left:-12px;
            height:45px;
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
        
    
    }
}

</style>