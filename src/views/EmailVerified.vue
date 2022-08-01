<template>
    <b-container fluid>
        <b-row class="email__verified d-flex  justify-content-center align-items-center vh-100">
            <b-col class=" email__verified-main col-xs-12 col-md-9 col-xl-5 vh-100 d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex justify-content-start">
                    <div class="text-center">
                        <img src="@/assets/images/Interactro Logo main 1.png"  height="70px"/>

                    </div>
                   
                </div>
                <div class="email_verified_main_content  pt-lg-5 px-lg-4  d-flex justify-content-start">
                    <div class="email_verified_main_content_details d-flex flex-column justify-content-center align-items-center text-center px-lg-5 mb-lg-5">

                        <h3 class="font-weight-bolder">Please verify your email</h3>
                    </div>
                                           
                </div>
                <div class="email_verified_main_content_details-para">
                    <p>You're account is almost ready! We sent an email to
                        <span class="email_verified_main_content_details-para_email align-items-center"> henrysaint1@yandex.com</span>
                    </p>

                    <p class="">Click the link in the email to complete your signup. </p>
                        <span class="">Be sure to check your spam folder if it is not in your inbox.</span>
                     <p class="text-center">Don't see the email?</p>
                        
                        <b-form
                            class="email_verified_main_content_details_form pb-lg-5 mx-lg-auto"
                            ref="email_verified_form"
                            @submit.prevent="submitForm"
                        >
                        <a
                            
                            type="submit"
                            class="email_verified_main_content_details_form_button w-100 text-center  px-5 py-3 login__page-right-form-btn "
                        >
                            RESEND  EMAIL
                        </a>

                    </b-form>
                
                </div>
                    

              
            </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss" scoped>
  .email_verified{
        background:#F8F8F8;
        font-family: 'poppin', sans-serif;
        &_main{
            //
            &_content{
                //
                &_details{
                    //
                    &-para{
                        
                        font-size: 25px;
                        &_email {
                            font-weight: bold;
                            margin-left: 150px;
                        }
                    }
                }
            }


            
        
        }
       
    }


</style>