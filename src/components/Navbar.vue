<template>
    <div class="col-12 position-fixed">    
        <div class="d-flex upgrade">
            <div class="upgrade-btn-  mt-2 mx-2">
                <b-button variant="clear" class="upgrade-btn" to="/">
                    <span class=""><img class="pr-3" src="@/assets/sidebars/save file.png">All changes saved</span>
                </b-button>
                
            </div>
            <div class="upgrade-btn  mt-2 mx-2">
                <b-button variant="clear" class="upgrade-btn___link" to="/">
                    <span class=""><img src="@/assets/sidebars/Preview.png"> </span>
                </b-button>
                
            </div>
            <div class="upgrade-btn mt-2 mx-2">
                <b-button variant="clear" class="upgrade-btn___link" to="/">
                    <span class=""><img class="pr-3" src="@/assets/sidebars/save_exit.png"> SAVE & EXIT</span>
                </b-button>
                
            </div>
            <div class="upgrade-btn mt-2 mx-2">
                <b-button variant="clear" class="upgrade-btn___link" >
                    <span class=""> <img class="pr-3" src="@/assets/sidebars/publish.png"> PUBLISH</span>

                </b-button>
                
                
            </div>
        </div>
         <div class="right-block mx-auto d-flex justify-content-end position-absolute">
                
                
                
            <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" no-caret>
                <template #button-content>
                    <b-avatar
                        size="1.5rem"
                        class="mb-5"
                    />
                    <span class="user mx-2">user</span>
                    <span class="">
                        <img class="px-3 dropdown mb-5" src="@/assets/headers/dropdown_arrow.png" alt="dropdown">
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
                        <img class="mb-5" height="" src="@/assets/icons/notification.svg" alt="">
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                </b-dropdown>

            </div>
            <div class="container mt-5 d-flex button_text_section">
                <div class="d-flex col-12">
                    <div class="button_text_section_button-color d-flex block col-5">
                        <span class="mt-2 "> 
                            <b-button class="background_color mx-4" @click="changeColor"></b-button>
                            <h6 class="mx-2">Background</h6>
                            
                        </span>
                        <span class="mt-2">
                            <b-button class="option mx-3"></b-button>
                            <h6 class="mx-2">Option</h6>
                        </span>
                        <span class="mt-2">
                            <b-button class="selection  mx-4"></b-button>
                            <h6 class="mx-2">Selection</h6>
                        </span>
                        <span class="mt-2">
                            <b-button class="progress__bar mx-4"></b-button>
                            <h6 class="mx-2">Progress bar</h6>
                        </span>
                        <span class="mt-2 ">
                            <b-button class="button mx-2"></b-button>
                            <h6 class="mx-2 ">Button</h6>
                        </span>
                        </div>
                        
                    
                        <div class="col-3 pt-4 section_2">
                        <span class="pt-5">Quiz Color<img class="mx-2" src="@/assets/sidebars/fill icon.png"> </span>
                        </div>
                        <div class="section-3  pt-3 col-6 px-3">
                            <span class=""><img height="30px" class=" mx-5" src="@/assets/sidebars/Font.png"></span>
                            <span class=""><img class="" src="@/assets/sidebars/logo__image.png"></span>
                      </div>
                
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    name: "Navbar",
    data(){
        return {

        }
    },
    methods :{
        
    }
    
    
}
</script>
<style lang="scss" scoped>
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
                top:-30px;
               
               
                &_button-color{
                    background:#C4C4C4;
                    margin-left:-30px

                    
                     
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
            
                
            
           
        }
        
</style>