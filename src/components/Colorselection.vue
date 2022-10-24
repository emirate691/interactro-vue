<template>
    <div class="container mt-5 d-flex button_text_section" align-v="stretch">
                <div class="d-flex col-12 cols-lg-12">
                    <div class="button_text_section_button-color d-flex block col-5">
                        <span class="mt-2 "> 
                            <input type="color" value="#D12551" class="background_color mx-4"
                            

                            :style="background"
                             @click="setColor()"

                             />
                            
                            <h6 class="mx-2" style="font-size:14px">Background</h6>
                            
                        </span> 
                        <span class="mt-2">
                            <input type="color" value="#EF4873" class="option mx-3" />
                            <h6 class="mx-2">Option</h6>
                        </span>
                        <span class="mt-2">
                            <input type="color"  value="#FFCAD8" class="selection  mx-4" />
                            <h6 class="mx-2">Selection</h6>
                        </span>
                        <span class="mt-2">
                            <input type="color" value="#313F68" class="progress__bar mx-4" />
                            <h6 class="mx-2">Progress bar</h6>
                        </span>
                        <span class="mt-2 ">
                            <input type="color" value="#6379B9" class="button mx-2" />
                            <h6 class="mx-2 ">Button</h6>
                        </span>
                        </div>
                        
                    
                        <div class="col-3 pt-4 section_2">
                        <span class="pt-5"><h6 class="m"> Quiz Color<img class="mx-3" src="@/assets/sidebars/fill icon.png"></h6> </span>
                        </div>
                        <div class="section-3  pt-3 col-6 px-3">
                            <span class=""><img height="30px" class=" mx-5" src="@/assets/sidebars/Font.png"></span>
                            <span class=""><img class="" src="@/assets/sidebars/logo__image.png"></span>
                      </div>
                </div>
            </div>
            
</template>
<style lang="scss" scoped>
        .button_text_section{
                position:fixed;
                //background:#FFFFFF;
                left:300px;
                top:30px;
               
               
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
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance:none;
                    width:25px;
                    height:25px;
                    background-color:transparent;
                    border:none;
                    cursor:pointer;
                    
                }
                .background_color::-webkit-color-swatch{
                    border-radius:50%;
                    border: 1px solid #D12551;
                }
                .background_color::-moz-color-swatch {
                    border-radius:50%;
                    border: 1px solid #D12551;
                }
                .option{
                    
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance:none;
                    width:25px;
                    height:25px;
                    background-color:transparent;
                    border:none;
                    cursor:pointer;
                }
                .option::-webkit-color-swatch{
                    border-radius:50%;
                    border: 1px solid #EF4873;;
                }
                .option::-moz-color-swatch {
                    border-radius:50%;
                    border: 1px solid #EF4873;;
                }
                .selection{
                    
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance:none;
                    width:25px;
                    height:25px;
                    background-color:transparent;
                    border:none;
                    cursor:pointer;
                }
                .selection::-webkit-color-swatch{
                    border-radius:50%;
                    border: 1px solid #FFCAD8;
                }
                .selection::-moz-color-swatch {
                    border-radius:50%;
                    border: 1px solid #FFCAD8;
                }
                
                .progress__bar{
                    background:#313F68;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance:none;
                    width:25px;
                    height:25px;
                    background-color:transparent;
                    border:none;
                    cursor:pointer;
                    
                    
                }
                .progress__bar::-webkit-color-swatch{
                    border-radius:50%;
                    border: 1px solid #313F68;;
                }
                .progress__bar::-moz-color-swatch {
                    border-radius:50%;
                    border: 1px solid #313F68;;
                }
                .button{
                    
                   -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance:none;
                    width:25px;
                    height:25px;
                    background-color:transparent;
                    border:none;
                    cursor:pointer;
                }
                .button::-webkit-color-swatch{
                    border-radius:50%;
                    border: 1px solid #6379B9;
                }
                .button::-moz-color-swatch {
                    border-radius:50%;
                    border: 1px solid #6379B9;
                }
    
            }
            
</style>