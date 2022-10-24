<template>
    <div class="url">
            <div class="url_container pt-5 d-flex  justify-content-center align-items-center text-center">
                <form class="url_container__form text-center pt-5">
                    <div class="justify-content-left align-items-left text-left">
                        <h5 class="url_container__heading text-left">Image from the web</h5>
                    </div>
                    <div class="url_container__box">
                        <div class="justify-content-left align-items-left text-left">
                            <div class="pt-3">
                                <p class=" url_container__para position-relative text-left p-3">Note: This image can not be edited - this is a direct link to the URL</p>
                                </div>
                                <b-input-group class="url__input p-3 pb-5 ">
                                <template #prepend>
                                    <b-input-group-text  class="url_container_bg"><img src="@/assets/icons/Url.png" height="20px"></b-input-group-text>
                                </template>
                                <b-form-input placeholder="Enter image URL ...."></b-form-input>
                            </b-input-group>
                            <b-button 
                                variant="clear"
                                class="m-3 save-btn mt-5"
                            >
                                SAVE IMAGE
                            </b-button>
                        </div>
                        
                        
                    </div>
                <div class=" position-absolute text-left mt-3 text-white">
                    <div class="upload_auth mt-2">
                        <span class="">Recommended dimensions:</span>
                        <span class="mx-5 px-3 justify-content-left">  900px by 400px</span>
                    </div>
                </div>
                    
            </form>
        </div>   
    </div>
</template>

<style lang="scss" scoped>
    .url {
        .url_container{
           
            &__box{
                background: #313F68;
               
                border: 0.3px dashed #FFFFFF;
                border-radius: 5px;
                width:700px;
                

            }
            &_bg{
                background:#6379B9;
            }
            &__heading{
                color:#FFFFFF;
                font-size:20px;
                font-family:'Roboto', sans-serif;
                font-family:700;
            }
            &__para{
                font-family:'Roboto', sans-serif;
                color:#C4C4C4;
                font-size:9px;
                font-family:'Roboto', sans-serif;
                //font-family:700;


            }
            
        }
            
                
            .url__input{
                position:absolute;
                width:60%;
                bottom:160px;

                
              
            }
            .save-btn{
                background:#EF4873;
                color: #FFFFFF;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 500;
                margin-bottom: 100px;
            }
    }
</style>