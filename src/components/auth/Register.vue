<template>
    <b-container fluid>
        <b-row class="register__page-container h-100">
            <b-col class="register__page-container-content-left vh-100">
                <div class="left-block ml-auto pt-5 top ">
                    <div class="pt-5 pl-2 ml-4">
                        <img src="@/assets/images/Saly-1.png" class="pt-5" />
                        
                    </div>
                    <div class="justify-content-center align-items-center">
                        <h6 class="pt-2 text-center">View account details</h6> 
                        <img src="@/assets/icons/view_account_icon.png" height="10px" class=" view__account-icon" />
                        <div class="view__account-board pt-0  mx-auto">
                            <div class="view__account-board-details mx-2 mb-5 pt-2">
                                <b-link https="#" class="mx-3 mt-5  view__account-board-details-link"><img src="@/assets/icons/user.png" height="20px"/><span class="ml-2">Account Details</span></b-link><br>
                                <b-link https="#" class="mx-3  mb-5  view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Make unlimited quizzes</span></b-link><br>
                                <b-link https="#" class="mx-3  mb-5  view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Have unlimited quiz takers</span></b-link><br>
                                <b-link https="#" class="mx-3 mb-5   view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Add quizzes to your website</span></b-link><br>
                                <b-link https="#" class="mx-3 mb-5   view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Share quizzes on social media</span></b-link>
                                    

                            </div>
                        </div>
                    </div>
                    
                </div>
            </b-col>
            <b-col class="login__page-content-right h-100 col-8">
                <div class="right-block  mx-auto">
                    <div class=" text-primary-logo my-5 mx-5">
                        <img src="@/assets/images/Interactro Logo main 1.png" class="pt-5 ml-5 pl-5" />
                        <div class="text pt-5 mx-5 ">
                            <h5 class="text-1 ml-5 font-weight-bold">Sign Up!</h5>
                            <b-form 
                                class="register__form mt-3 mx-5"
                                ref="register__form"
                                @submit.prevent="registerUser"
                            >

                                <b-row>
                                    <b-col>
                                        <b-form-group>
                                            <b-form-lable>
                                                Company name
                                            </b-form-lable>
                                            <b-form-input 
                                                placeholder=""
                                                type="text"
                                                class="form__input w-100"
                                            />
                                            <b-form-invalid-feedback
                                                id="email-feedback"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li class="py-1">
                                                    full name is require
                                                </li>
                                            </ul>
                                                    
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group>
                                            <b-form-label>
                                                Name
                                            </b-form-label>
                                            <b-form-input
                                                type="text"
                                                class="form__input w-100"
                                            />
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-form-group>
                                            <b-form-label>
                                                work email
                                            </b-form-label>
                                            <b-form-input
                                                type="email"
                                                class="form__input w-100"
                                            />
                                            <b-form-invalid-feedback
                                                id="email-feedback"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li class="py-1">
                                                    enter a valid email
                                                </li>
                                                <li class="py-1">
                                                    email is already registered
                                                </li>
                                            </ul>
                                                    
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-form-group>
                                            <b-form-label>
                                                Create a password
                                            </b-form-label>
                                            <b-form-input 
                                                type="password"
                                                class="form__input w-100"
                                            />
                                            <div class="input_addon" @click="showPassword = !showPassword">
                                                <b-icon v-if="showPassword" icon="eye" aria-hidden="true" />
                                                <b-icon v-else icon="eye-slash" aria-hidden="true" />
                                            </div> 
                                            <b-form-invalid-feedback
                                                id="password-feedback"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li>
                                                    Password is required: Minimum 8 characters
                                                </li>
                                            </ul>
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-form-group
                                            id="terms_checkox"
                                            invalid-feedback="This is required"
                                        >
                                            <b-form-checkbox-group class="m-2">
                                                <b-form-checkbox
                                                    value="1"
                                                    unchecked-value=""
                                                >
                                                <small class="read__agreed">
                                                    I have read and agreed with the terms of service <br/>and privacy policy
                                                    
                                                </small>
                                                </b-form-checkbox>
                                                <b-form-invalid-feedback
                                                     id="terms-feedback"
                                                >

                                                    <ul class="m-0 pl-3 list-unstyled">
                                                        <li
                                                            
                                                            class="py-1"
                                                        >
                                                            Accept Terms of service to proceed
                                                        </li>
                                                    </ul>
                                                </b-form-invalid-feedback>
                                            </b-form-checkbox-group>
                                            

                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <div class="">
                                        <span class="">Sign up with </span>
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
                                </b-row>
                                <div class="my-4">
                                    <b-button
                                        variant=""
                                        type="submit"
                                        class="form__btn my-2 "
                                        :disabled="submitting"
                                    >
                                        Complete<img class="ml-3" src="@/assets/icons/Arrow 1.svg">
                                        
                                    </b-button>
                                    <small class="ml-3">
                                        Already have an account?
                                        <b-link href="/home" class="text-recovery">
                                            Sign in!
                                        </b-link>
                                    </small>
                                </div>
                                

                            </b-form>
                        </div>

                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
    .register__page-container {
        background: #fff;    
        height: 100%;
        min-height: 100vh;
        &-content {
            height: 100%;
            min-height: 100vh; 
            &-left {
                height: 450px;
                background-color:#F67899;
                width:20%;
                h6{
                    color: #fff;
                }
                .view__account-icon{
                    position:absolute;
                    left:250px;
                }
                .view__account-board{
                    background: #FDFDFD;
                    margin-top:40px;
                    width:60%;
                    height:170px;
                    border-radius: 10px;
                    margin-top:20px;
                    &-details{
                        color:#000000;
                        a{
                            
                            color: #000000;
                            font-size:13px;
                            text-decoration: none;
                            a:active{
                                color:red;
                            }
                            &:hover{
                                width: 100%;
                                background: #FFE5EC !important;
                                
                            }
                            
                        }

                    }
                }
            }
            &-right{

            }
            
            

        }
        .input_addon {
            cursor: pointer;
            position: absolute;
            right: 5%;
            top: 35px;
                
        }

        .form__input{
            background: #F8F8F8;
            height:45px;
            width:80%;
            border:1px solid #E4E4E4;
            border-radius:10px;
        }
        .form__btn {
            background:#D12551;
            width:25%;
            height:50px;
            border-radius: 15px; 
            border-radius: 1px solid #D12551;
;
        }
        .text-recovery{
            color:#D12551;
        }

        
    }
</style>