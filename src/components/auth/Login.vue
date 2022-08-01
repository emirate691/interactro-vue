<template>
    <div class="login__page-container">
        <b-row class="login__page-container-content pt-0">
            <b-col class="login__page-container-content-left mt-0 h-100">
                <div class="left-block ml-auto pt-3 top ">
                    <div class="pt-5 pl-2 ml-4">
                        <img src="@/assets/images/img1 1.png" class="pt-5" />

                    </div>
                </div>

            </b-col>
            <b-col class="login__page-content-right h-100 col-8">
                <div class="right-block  mx-auto">
                    <div class=" text-primary-logo my-5 mx-5">
                        <img src="@/assets/images/Interactro Logo main 1.png" class="pt-5 ml-5 pl-5" />
                        <div class="text pt-5 mx-5 ">
                            <img src="@/assets/images/Emoji.png" class="ml-5" /><span class="text-1 ml-2 font-weight-bold">Welcome back Goody!</span>
                            
                        </div>

                    </div>
                    <b-form 
                        class="login__form mx-5"
                        ref="login__form"
                        @submit.prevent="submitForm"
                    >
                        <b-form-group class="mb-3 ml-5 pl-5">
                            <b-form-label>
                                Email
                             </b-form-label>
                            <b-form-input
                                placeholder="Goodywlson1@outlook.com"
                                type="email"
                                class="form__input"
                                 
                            />
                            <b-form-invalid-feedback
                                id="email-feedback"
                            >
                            <ul class="m-0 pl-3 list-unstyled">
                               <li>
                                    Email is required & must be valid 
                               </li>
                            </ul>
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group class="mb-3 ml-5 pl-5 my-4">
                            <b-form-label>
                                password
                            </b-form-label>
                            <b-form-input
                                placeholder="***********"
                                type="password"
                                class="form__input"
                            />
                            <div class="input_addon" >
                                    <b-icon v-if="showPassword" icon="eye" aria-hidden="true" />
                                    <b-icon v-else icon="eye-slash" aria-hidden="true" />
                            </div> 
                            <b-form-invalid-feedback
                                id="email-feedback"
                            >
                            <ul class="m-0 pl-3 list-unstyled">
                                <li 
                                    class="py-1"
                                >
                                    password is required
                                </li>
                            </ul>
                            </b-form-invalid-feedback>
                        </b-form-group>

                       <b-row class="">
                            <div class="">
                                <span class="ml-5 pl-5 my-4">Sign in with</span>
                                <b-button
                                  variant="light"
                                  class="m-3"
                                >
                                <img class="login__form-social" src="@/assets/icons/google 1.svg" />
                                </b-button>

                                <b-button  
                                   variant="light"
                                   class="m-3 "
                                >
                                 <img  class="login__form-social" src="@/assets/icons/facebook 1.svg" />
                                </b-button>
                            </div>
                            <div class="d-flex justify-content-between ml-5 pl-5 my-4">
                                <small class="ml-2">
                                    Forgot your password?
                                    <b-link
                                        class="text-recovery"
                                        
                                        to="/auth/password-recovery"
                                    >
                                        Reset your password
                                    </b-link>
                                </small>
                                
                            </div>

                       </b-row>
                       <div class="ml-5 pl-5 my-4">
                            <b-button
                                variant="primary"
                                type="submit"
                                class="form__btn my-2 "
                                :disabled="submitting"
                            >
                                Login <img class="ml-3" src="@/assets/icons/Arrow 1.svg">
                                
                            </b-button>
                            <small class="ml-3">
                                    Don't have an account?
                                    <b-link href="/register" class="text-recovery">
                                        Sign up!
                                    </b-link>
                                    
                            </small>
                       </div>
                    </b-form>

                </div>
            </b-col>

        </b-row>

    </div>
    
</template>
<script>

//import { required, email } from '@vuelidate/validators'
export default {
    name: "Login",
    data : () => ({
        submitting : false
    })

    
}
    
  

</script>
<style lang="scss" scoped>
    .login__page-container {
        background: #fff;    
        height: 100%;
        min-height: 100vh;
        &-content {
        
            height: 100%;
            min-height: 100vh;
            //@include poppins-font;
        
        
            &-left {
                height: 450px;
                background-color:#6379B9;
                width:20%;
                
                
                .text {
                    
                    font-style: normal;
                    font-weight: normal;
                    font-family: 'poppin', sans-serif;
                }
                .text-1{
                    position:absolute;
                    margin-left:-100px;
                }

                
            }
            &-right {
                background: #fff;
                
            }
            .input_addon {
                cursor: pointer;
                position: absolute;
                right: 23%;
                top: 385px;
                
            }
            .text-recovery{
                color:#D12551;
            }
            .form__input{
                background: #F8F8F8;
                width:80%;
                border:1px solid #E4E4E4;
                border-radius:10px;
            }
            .form__btn {
                background:#344E99;
                width:20%;
                border-radius: 15px;
;
            }
            
        }
        
    }
</style>