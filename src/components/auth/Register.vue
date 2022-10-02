<template>
    <b-container fluid>
        <b-row class="register__page-container h-100">
            <b-col class="register__page-container-content-left vh-100">
                <div class="left-block ml-auto pt-2 top ">
                    <div class="pt-5 pl-2 ml-4">
                        <img src="@/assets/images/Saly-1.png" class="pt-5" />
                        
                    </div>
                    <div class="justify-content-center align-items-center">
                        <h6 class="pt-2 text-center view-account"  v-on:click="isHidden = !isHidden"
                        >
                           <template v-if="isHidden"><span class=""> View account details</span></template>
                           <template> <img src="@/assets/icons/view_account_icon.png" height="10px" class=" view__account-icon" /></template>
                        </h6> 
                        <div class="">
                           
                            <div class="view__account-board pt-0  mx-auto" v-if="!isHidden">
                                <div class="view__account-board-details mx-2 mb-5 pt-2">
                                    <b-link https="#" class="mx-3 mt-5 view__account-board-details-link"><img src="@/assets/icons/user.png" height="20px"/><span class="ml-2">Account Details</span></b-link><br>
                                    <b-link https="#" class="mx-3  mb-5   view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Make unlimited quizzes</span></b-link><br>
                                    <b-link https="#" class="mx-3  mb-5 view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Have unlimited quiz takers</span></b-link><br>
                                    <b-link https="#" class="mx-3 mb-5   view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Add quizzes to your website</span></b-link><br>
                                    <b-link https="#" class="mx-3 mb-5   view__account-board-details-link"><img src="@/assets/icons/approval.png"/><span class="ml-2">Share quizzes on social media</span></b-link>
                                        

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </b-col>
            <b-col class="login__page-content-right h-100 col-8">
                <div class="right-block  mx-auto">
                    <div class="text-primary-logo my-5 mx-5">
                        <img src="@/assets/images/Interactro Logo main 1.png"  height="50px" class="pl-5" />
                        <div class="text  mx-5 ">
                            <h5 class="text-1 mt-4">Sign Up!</h5>
                            <b-form @submit.stop.prevent="onSubmit" class="pt-5">
                                <b-row>
                                    <b-col>
                                        <b-form-group id="example-input-group-1" label="Company name" label-for="example-input-1 font-weight-bold">
                                            <b-form-input
                                            id="example-input-1"
                                            name="example-input-1"
                                            class="form__input w-100"
                                            v-model="$v.register.company.$model"
                                            :state="validateState('company')"
                                            aria-describedby="input-1-live-feedback"
                                            ></b-form-input>

                                            <b-form-invalid-feedback
                                                id="input-1-live-feedback"
                                                :class="{ 'd-block': $v.register.company.$dirty }"
                                            >   
                                                 <ul class="m-0 pl-3 list-unstyled">
                                                     <li v-if="!$v.register.company.required" class="py-1">
                                                        company name is require
                                                    </li>
                                                </ul>
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                

                                        <b-form-group id="example-input-group-2" label="Name" label-for="example-input-2">
                                            <b-form-input
                                            id="example-input-2"
                                            name="example-input-2"
                                            class="form__input w-100"
                                            v-model="$v.register.name.$model"
                                            :state="validateState('name')"
                                            aria-describedby="input-2-live-feedback"
                                            ></b-form-input>

                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
                                                :class="{ 'd-block': $v.register.name.$dirty }"
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
                                        <b-form-group id="example-input-group-3" label="Work email" label-for="example-input-3">
                                            <b-form-input
                                                id="example-input-3"
                                                name="example-input-3"
                                                class="form__input w-100"
                                                v-model="$v.register.email.$model"
                                                :state="validateState('email')"
                                                aria-describedby="input-3-live-feedback"
                                            >
                                            </b-form-input>

                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
                                                 :class="{ 'd-block': $v.register.email.$dirty }"
                                            >   
                                               <ul class="m-0 pl-3 list-unstyled">
                                                     <li v-if="!$v.register.name.required" class="py-1">
                                                        email is is require
                                                    </li>
                                                    <li  class="py-1">
                                                        email is already registered
                                                    </li>
                                                </ul>
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-form-group id="example-input-group-4" label="Create password" label-for="example-input-4">
                                        <b-form-input
                                            id="example-input-4"
                                            name="example-input-4"
                                            :type="showPassword ? 'text' : 'password'"
                                            class="form__input w-100"
                                            v-model="$v.register.password.$model"
                                            :state="validateState('password')"
                                            aria-describedby="input-4-live-feedback"
                                            >
                                        </b-form-input>

                                            <div class="input_addon" @click="showPassword = !showPassword">
                                                <b-icon v-if="showPassword" icon="eye" aria-hidden="true" />
                                                <b-icon v-else icon="eye-slash" aria-hidden="true" />
                                            </div> 
                                            <b-form-invalid-feedback
                                                id="input-4-live-feedback"
                                                :class="{ 'd-block': $v.register.password.$dirty }"
                                            >   
                                                <ul class="m-0 pl-3 list-unstyled">
                                                     <li v-if="!$v.register.password.required || !$v.register.password.minLength" class="py-1">
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
                                                    id="terms"
                                                    class="checkbox"
                                                    size="lg"
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
                                                    
                                                                                                          
                                                >

                                                    <ul class="m-0 pl-3 list-unstyled">
                                                        <li  class="py-1">
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
                                            class="m-3 handleSocialAuth"
                                            @click="handleSocialAuth('google')"
                                        >
                                        <img class="login__form-social" src="@/assets/icons/google 1.svg" />
                                        </b-button>
                                        <b-button
                                            
                                            variant="light"
                                            class="m-3 handleSocialAuth"
                                             @click="handleSocialAuth('facebook')"
                                        >
                                            <img  class="login__form-social" src="@/assets/icons/facebook 1.svg" />
                                        </b-button>

                                    </div>
                                </b-row>

                            
                            
                                <div class="">
                                    <b-button 
                                        type="submit" variant="clear"
                                        class="form__btn my-2"
                                        :disabled="submitting"  
                                    >
                                       <span class="form__btn-complete"> Complete<img class="ml-3" src="@/assets/icons/Arrow 1.svg"></span>

                                    </b-button>
                                    <small class="ml-3 alread-have-an-account">
                                        Already have an account?
                                        <b-link href="/" class="text-recovery">
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
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      
      register: {
        company: "",
        name: "",
        email:"",
        password: "",
        terms: ""
      },
      showPassword: false,
      submitting: false,
      isHidden: true,
    };
  },
  validations: {
    register: {
      
      company: {
        required,
        minLength: minLength(2),
        
      },
      name: {
        required
        
      },
      email: {
        required,
        
        /*async isUnique (value) {
            if (value === null|| value.length < 2 ) return true
            const response = await this.$axios.get(`/unique/email/${value}`)
            if (response.data.exists) {
                return false
            } 
                return true
            }*/
      },
      password : {
        required,
         minLength: minLength(8)
        
      },
      terms: {
        required
      }
    }
    
  },
  
  methods: {
    validateState(company) {
      const { $dirty, $error } = this.$v.register[company];
      return $dirty ? !$error : null;
    },
    
    resetForm() {
      this.form = {
        name: null,
        food: null
      };

      this.$nextTick(() => {
        //this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.register.$touch();
     
      if (this.$v.register.$anyError) {
       
        return;
        
        
      }
      alert("Form submitted!");

      
    },
    handleSocialAuth(type) {
     console.log('login with --> ', type);
     //alert ('login with -->', type)
    }

  }
  
};
</script>

<style lang="scss" scope>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

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
                .view-account{
                    cursor:pointer;
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
                                //width: 100%;
                                background: #FFE5EC !important;
                                padding: 10px 15px;
                                position: fixed;
                                
                            }
                            
                        }

                    }
                }
            }
           /* &-right{

            }*/
            
            

        }
        .text-1{
            font-style: normal;
            font-weight:700;
            font-size: 30px;

        }
        .input_addon {
            cursor: pointer;
            position: absolute;
            right:50px;
            top: 45px;
                
        }

        .form__input{
            background: #F8F8F8;
            height:55px;
            width:80%;
            border:1px solid #E4E4E4;
            border-radius:10px;
           
        }
        .form__btn {
            background:#D12551;
            width:25%;
            height:50px;
            border-radius: 15px; 
            color:#FFFFFF;
            border-radius: 1px solid #D12551;
            &-complete{
                font-weight: 400;
                font-size: 20px;
            }
            &:hover::after {
                background-color:#D12551;
            }
;
        }
        .text-recovery{
            color:#D12551;
        }
        .alread-have-an-account{
            font-size:20px;
            
            font-family:'Poppins, sans-serif'
        }
        .handleSocialAuth{
            background: #FFFFFF;
            border: 1px solid #DEDEDE;
            box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
        }
        .read__agreed{
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            color: #000000;
        }
        

        
    }
</style>

