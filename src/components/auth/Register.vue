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
                                @submit.prevent="handleSubmit"
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
                                                v-model="register.company_name"
                                                :class="{ 'is-invalid': isSubmitted && $v.register.company_name.$error }"
                                            />
                                            <b-form-invalid-feedback
                                                id="email-feedback"
                                                v-if="isSubmitted && !$v.register.company_name.required"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li  v-if="!$v.register.company_name.required" class="py-1">
                                                    company name is require
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
                                                 v-model="register.name"
                                                 :class="{ 'is-invalid': isSubmitted && $v.register.name.$error }"


                                            />
                                            <b-form-invalid-feedback
                                                id="email-feedback"
                                                v-if="isSubmitted && !$v.register.name.required"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li v-if="!$v.register.name.required" class="py-1">
                                                    name is require
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
                                                work email
                                            </b-form-label>
                                            <b-form-input
                                                type="email"
                                                class="form__input w-100"
                                                v-model="register.email"
                                                :class="{ 'is-invalid': isSubmitted && $v.register.email.$error }"
                                                
                                            />
                                            <b-form-invalid-feedback
                                                id="email-feedback"
                                                v-if="isSubmitted && $v.register.email.$error"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li  v-if="!$v.register.email.required" class="py-1">
                                                    enter a valid email
                                                </li>
                                                <li v-if="!$v.register.email.email" class="py-1">
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
                                                v-model="register.password"
                                                :class="{ 'is-invalid': isSubmitted && $v.register.password.$error }" 
                                            />
                                            <div class="input_addon" @click="showPassword = !showPassword">
                                                <b-icon v-if="showPassword" icon="eye" aria-hidden="true" />
                                                <b-icon v-else icon="eye-slash" aria-hidden="true" />
                                            </div> 
                                            <b-form-invalid-feedback
                                                id="password-feedback"  
                                                v-if="isSubmitted && $v.register.password.$error"
                                            >
                                            <ul class="m-0 pl-3 list-unstyled">
                                                <li v-if="!$v.register.password.required">
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
                                            @change="$v.register.accept.$touch()"
                                           

                                        >
                                            <b-form-checkbox-group class="m-2">
                                                <b-form-checkbox
                                                    v-model="register.accept"                                                    
                                                    value="1"
                                                    unchecked-value=""
                                                    
                                                >
                                                <small 
                                                    class="read__agreed"
                                                    >
                                                    I have read and agreed with the terms of service <br/>and privacy policy
                                                    
                                                </small>
                                                </b-form-checkbox>
                                                <b-form-invalid-feedback
                                                     id="terms-feedback"
                                                     v-if="isSubmitted && $v.register.accept.$error"
                                                     
                                                >

                                                    <ul class="m-0 pl-3 list-unstyled">
                                                        <li v-if="!$v.userForm.accept.required" class="py-1">
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
                                            @click="handleSocialAuth('google')"
                                        >
                                        <img class="login__form-social" src="@/assets/icons/google 1.svg" />
                                        </b-button>
                                        <b-button
                                            
                                            variant="light"
                                            class="m-3 "
                                             @click="handleSocialAuth('facebook')"
                                        >
                                            <img  class="login__form-social" src="@/assets/icons/facebook 1.svg" />
                                        </b-button>

                                    </div>
                                </b-row>
                                <div class="my-4">
                                    <b-button 
                                        
                                        class="form__btn my-2"  
                                        @click="registerUser"
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

import { required, minLength, email} from 'vuelidate/lib/validators'
export default {
    name:'Registerform',
        data() {
            return {
                register: {
                    company_name: "",
                    name: "",
                    email: "",
                    password: "",
                    accept: ""
                },
                isSubmitted: false
                };
            },
        validations: {
            register: {
                company_name: {
                    required
                },
                name: {
                    required
                },
                email: {
                    required,
                    email
                },
                
                password: {
                    required,
                    minLength: minLength(5)
                },
                
                accept: {
                    required (val) {
                      return val
                    }
                }
            }
        },
        methods: {
            handleSubmit() {
                this.isSubmitted = true;
               
                if (this.$v.$invalid) {
                    return;
                }
                alert("SUCCESS!" + JSON.stringify(this.register));
            }
        }

    
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
                                
                            }
                            &:hover{
                                width: 100%;
                                background: #FFE5EC !important;
                                
                            }
                            
                        }

                    }
                }
            }
           /* &-right{

            }*/
            
            

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
            &:hover::after {
                background-color:#D12551;
            }
;
        }
        .text-recovery{
            color:#D12551;
        }

        
    }
</style>

<!--template>
    <div class="container" style="max-width: 500px; text-align: left">
        <div class="alert alert-success" role="alert">
            <h2 class="alert-heading">Vue Form Validation Example</h2>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="userForm.name" id="name" name="name" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }" />
                <div v-if="isSubmitted && !$v.userForm.name.required" class="invalid-feedback">Name field is required</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="userForm.email" id="email" name="email" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }" />
                <div v-if="isSubmitted && $v.userForm.email.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.email.required">Email field is required</span>
                    <span v-if="!$v.userForm.email.email">Please provide valid email</span>
                </div>
            </div>
            <div class="form-group">
                <label for="mobile">Mobile</label>
                <input type="text" v-model="userForm.mobile" id="mobile" name="mobile" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.mobile.$error }" />
                <div v-if="isSubmitted && $v.userForm.mobile.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.mobile.required">Mobile field is required</span>
                </div>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <div class="form-group" :class="{ 'is-invalid': isSubmitted && $v.userForm.gender.$error }">
                    <div class="form-check form-check-inline" :class="{ 'is-invalid': isSubmitted && $v.userForm.gender.$error }">
                        <input class="form-check-input" type="radio" name="gender" v-model="userForm.gender" id="gender1" value="male">
                        <label class="form-check-label" for="gender1">Male</label>
                    </div>
                    <div class="form-check form-check-inline" :class="{ 'is-invalid': isSubmitted && $v.userForm.gender.$error }">
                        <input class="form-check-input" type="radio" name="gender" v-model="userForm.gender" id="gender2" value="female">
                        <label class="form-check-label" for="gender2">Female</label>
                    </div>
                    <div v-if="isSubmitted && $v.userForm.gender.$error" class="invalid-feedback">
                        <span v-if="!$v.userForm.gender.required">This field is required</span>
                    </div>                    
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="userForm.password" id="password" name="password" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }" />
                <div v-if="isSubmitted && $v.userForm.password.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.password.required">Password field is required</span>
                    <span v-if="!$v.userForm.password.minLength">Password should be at least 5 characters long</span>
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" v-model="userForm.confirmPassword" id="confirmPassword" name="confirmPassword"
                    class="form-control" :class="{ 'is-invalid': isSubmitted && $v.userForm.confirmPassword.$error }" />
                <div v-if="isSubmitted && $v.userForm.confirmPassword.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.confirmPassword.required">Confirm Password field is required</span>
                    <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword">Passwords should be matched</span>
                </div>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model="userForm.accept" @change="$v.userForm.accept.$touch()" id="accept" class="form-check-input">
                <label class="form-check-label" :class="{ 'is-invalid': isSubmitted && $v.userForm.accept.$error }" for="accept">Accept terms &nbsp; conditions</label>
                <div v-if="isSubmitted && $v.userForm.accept.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.accept.required">Accept terms and conditions</span>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-danger btn-block">Register</button>
            </div>
        </form>
        
    </div>
</template-->
<!--script>
    import {
        required,
        email,
        minLength,
        sameAs
    } from "vuelidate/lib/validators";
    export default {
        data() {
            return {
                userForm: {
                    name: "",
                    email: "",
                    mobile: "",
                    gender: "",
                    password: "",
                    confirmPassword: "",
                    accept: ""
                },
                isSubmitted: false
            };
        },
        validations: {
            userForm: {
                name: {
                    required
                },
                email: {
                    required,
                    email
                },
                mobile: {
                    required
                },
                gender: {
                    required
                },
                password: {
                    required,
                    minLength: minLength(5)
                },
                confirmPassword: {
                    required,
                    sameAsPassword: sameAs('password')
                },
                accept: {
                    required (val) {
                      return val
                    }
                }
            }
        },
        methods: {
            handleSubmit() {
                this.isSubmitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                alert("SUCCESS!" + JSON.stringify(this.userForm));
            }
        }
    };
</script-->
<!--style lang="scss">
.form-group > label {
    font-weight: 600;
}
</style-->


