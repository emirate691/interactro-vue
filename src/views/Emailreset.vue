<template>
  <b-container fluid>
        <b-row class="email__verified d-flex  justify-content-center align-items-center">
            <b-row class="email__verified_header d-flex  justify-content-center align-items-center">
                <b-col class=" pt-5  d-flex  justify-content-center align-items-center">
                    <div class="text-center pt-5 email__verified_header-bg ">
                        <div class="mb-5">
                            
                                
                            
                            <span class="font-weight-bold successful">
                                <img src="@/assets/icons/approval.png" height="40px" class=""/>
                                Email has been successfully resent to 
                                <div class="email__verified_header-bg-yandex">henrysaint1@yandex.com. Please check your inbox.</div>
                            </span>
                        </div>
                    </div>
                </b-col>
            </b-row>
        
            <b-row class="email__verified d-flex  justify-content-center align-items-center">
            
                <b-col class=" email__verified-main col-xs-12 col-md-9 col-xl-5  mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
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
                    <div class="">
                        <p>You're account is almost ready! We sent an email to
                            <span class="font-weight-bolder"> henrysaint1@yandex.com</span>
                        </p>

                        <p>Click the link in the email to complete your signup. Be sure to check your spam folder if it is not in your inbox.
                        <p>Don't see the email?</p>
                            
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
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
 .email__verified{
    background: #F8F8F8;
    &_header{
        &-bg{
            background:#FFD7E1;
            width: 50%;
            &-yandex{
                
                margin-left:150px;
            }
            
        }
    }
    a{
        color: #D12551 !important;
        &:hover{
            text-decoration: none;
        
        }

    }
    
    
 }

</style>