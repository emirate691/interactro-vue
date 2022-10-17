<template>
    <b-row class="register__page h-100 w-100" align-v="stretch">
        <img src="@/assets/images/saly-1.png" class="d-none d-md-block landing_page_img" />
        <b-row>
            <b-col cols="4" class="h-100 d-none d-md-block">
                <div class="register__page-left-section">
                </div>
            </b-col>
            <b-col>
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="register__page-right-section">
                        <img src="@/assets/images/Interactro Logo main 1.png" class="mb-4" />
                        <div class="d-flex align-items-center">
                            
                            <h4 class="pl-2">Sign Up!</h4>
                        </div>
                        <b-form action=""
                            class="py-5 w-100"
                            @submit.prevent="registerUser "
                        >
                            <b-row>
                                <b-col>
                                    <b-form-group
                                        label="Company Name"
                                    >
                            
                                        <b-form-input
                                            id="company_name"
                                            name="name"
                                            type="text"
                                            class="form__input"
                                            v-model="$v.register.company.$model"
                                            :state="validateState('company')"
                                            aria-describedby="company_name-live-feedback"
                                        />
                                        <b-form-invalid-feedback
                                            id="company_name-live-feedback"
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
                                    <b-form-group
                                        label="Name"
                                    >
                            
                                        <b-form-input
                                            id="name"
                                            name="name"
                                            type="text"
                                            class="form__input"
                                            v-model="$v.register.name.$model"
                                            :state="validateState('name')"
                                            aria-describedby="name-live-feedback"

                                        />
                                        <b-form-invalid-feedback
                                            id="company_name-live-feedback"
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
                            <b-form-group
                                 label="Work email"
                            >
                            
                            <b-form-input
                                id="email"
                                name="email"
                                type="email"
                                class="form__input"
                                v-model="$v.register.email.$model"
                                :state="validateState($v.register.email)"
                            />
                            <b-form-invalid-feedback
                                    id="email-feedback"
                                    :class="{ 'd-block': $v.register.email.$dirty }"
                                >
                                <ul class="m-0 pl-3 list-unstyled">
                                    <li v-if="!$v.register.email.required" class="py-1">
                                        Enter a valid Emai
                                    </li>
                                    <!--li v-if="!$v.register.email.isUnique" class="py-1">
                                        Email is already in use
                                    </li-->
                                </ul>
                             </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                label="Create a Password"
                                class="password_input"
                                                          >

                                <b-form-input
                                    :type="showPassword ? 'text' : 'password'"
                                    id="password"
                                    name="password"
                                    class="form__input"
                                    v-model="$v.register.password.$model"
                                    :state="validateState($v.register.password)"
  
                                />
                                <div class="input_addon" @click="showPassword = !showPassword">
                                    <b-icon :icon="showPassword ? 'eye' : 'eye-slash'" aria-hidden="true" />
                                </div> 
                                <b-form-invalid-feedback
                                    id="password-feedback"
                                    :class="{ 'd-block': $v.register.password.$dirty }"
                                >
                                    <ul class="m-0 pl-3 list-unstyled">
                                        <li
                                            v-if="!$v.register.password.required || !$v.register.password.minLength"
                                            class="py-1"
                                        >
                                            Password is required: Minimum 8 characters
                                        </li>
                                    </ul>
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-row>
                                <b-col cols="9">
                                    <b-form-group
                                        id="terms_checkox"
                                        invalid-feedback="This is required"
                                    >
                                        <b-form-checkbox-group id="terms_checkbox">
                                            <b-form-checkbox
                                                id="terms"
                                                v-model="$v.register.terms.$model"
                                                :state="validateState($v.register.terms)"
                                                value="1"
                                                unchecked-value=""
                                            >
                                                <div class="mb-3">
                                                    I’ve read and agreed with terms of service and our privacy policy
                                                </div>
                                            </b-form-checkbox>
                                               <b-form-invalid-feedback
                                                id="terms-feedback"
                                                :class="{ 'd-block': $v.register.terms.$dirty }"
                                            >
                                                <ul class="m-0 pl-3 list-unstyled">
                                                    <li
                                                        v-if="!$v.register.terms.required"
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
                                <b-col cols="8" >
                                    <div class="mb-3 d-flex justify-content-between align-items-center">
                                        <span>Sign Up With</span>
                                        <span>
                                            <img class="" src="@/assets/icons/google 1.svg" />
                                        </span>
                                        <span>
                                            <img  class="" src="@/assets/icons/facebook 1.svg" />
                                        </span>
                                    </div>
                                </b-col>
                            </b-row>
                            <!--div>
                                <p>Forgotten Password? <a href="#">Reset Your Password</a></p>
                            </div-->
                            <div class="d-lg-flex d-md-flex-column align-items-center">
                                <b-button
                                    variant="clear"
                                    class="register__btn"
                                    type="submit"
                                    :disabled="submitting"
                                >
                                    Complete
                                    <b-icon icon="arrow-right" />
                                     
                                </b-button>
                                <div class="pl-md-4">
                                    Already have an account? <b-link href="/auth/login"><span class="sign_in">Sign In!</span></b-link>
                                </div>
                            </div>

                        </b-form>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-row>
</template>
<script>
//import { required } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { required, minLength,email } from "vuelidate/lib/validators";
export default {
    mixins: [validationMixin],
    name: "RegisterForm",
    data(){
        
        return {
            
           register: {
            company: "",
            name: "",
            email:"",
            password: "",
            terms: ""
      },
        submitting: false,
        showPassword: false,
            
        }
    },
    validations: {
        register: {
            company: {
            required,
            minLength: minLength(2),
            
            },
            name: {
                required,
                 minLength: minLength(2),
                
            },
            email: {
               required,
               email,
               async isUnique (value) {
                    if (value === null|| value.length < 2 ) return true
                    const response = await this.$axios.get(`/unique/email/${value}`)
                    if (response.data.exists) {
                        return false
                    } 
                        return true
            }
               
               
            },
            password: {
               required,
               minLength: minLength(8)
            },
            terms:{
                required
            }
        }
    },
    beforeRouteEnter (to, from, next) {
        return next('/auth/login');
    },
    methods: {
        validateState(register) {
            const { $dirty, $error } = register
            return $dirty ? !$error : null;
        },
    
        
        async registerUser() {
            //valid check
            this.$v.register.$touch();
            if (this.$v.register.$anyError) return false;

            // disable submit button
            this.submitting = true;
            /*try{ 
                await store.dispatch('user/register', {
                    company: this.register.company,
                    name: this.register.name,
                    email: this.register.email,
                    password: this.register.password,
                });

                await store.dispatch('user/login', {
                    data: {
                        email: this.register.email,
                        password: this.register.password,
                    }
                });*/
                this.$router.push("/");


        }
    } 
   
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

    .register__page {
        position: relative;
       
        &-left-section {
            background-color: #F67899;
            min-height: 100vh;
            overflow-x: hidden;
            overflow-block: hidden;
            
           
        }
        .landing_page_img {
            position: absolute;
            bottom: 0px;
            width: 32em;
            z-index: 1;
        }
        &-right-section  {
            .password_input {
                position: relative;
            }
            .input_addon {
               cursor: pointer;
                position: absolute;
                right: 1em;
                bottom: 1em;
            }
        }
        .form__input{
            background: #F8F8F8;
            width: 100%;
            height: 52px;
            border: 1px solid #E4E4E4;
            border-radius: 10px;
        }
        .register__btn{
            background:#D12551;
            color:#FFFFFF;
            border-radius:10px;
        }
        .sign_in{
            color:#D12551;
        }
    }

    // .login__page-container {
    //     background: #fff;    
    //     height: 100%;
    //     min-height: 100vh;
        
    //     &-content {
        
    //         height: 100%;
    //         min-height: 100vh;
    //         //@include poppins-font;
        
        
    //         &-left {
    //             height: 450px;
    //             background-color:#6379B9;
    //             width:20%;
                
                
    //             .text {
                    
    //                 font-style: normal;
    //                 font-weight: normal;
    //                 font-family: 'poppin', sans-serif;
    //             }
    //             .text-1{
    //                 position:absolute;
    //                 margin-left:-100px;
    //                 font-family: 'Poppins', sans-serif;
    //                 font-weight:600;
    //                 font-size:20px;
    //             }

                
    //         }
    //         &-right {
    //             background: #fff;
                
    //         }
    //         .input_addon {
    //            cursor: pointer;
    //             position: absolute;
    //             right:240px;
    //             top: 418px;
                    
                
    //         }
            
    //         .text-recovery{
    //             color:#D12551;
                
    //         }
    //     .form__input{
    //         background: #F8F8F8;
    //         width:80%;
    //         height:52px;
    //         border:1px solid #E4E4E4;
    //         border-radius:10px;
    //     }
    //         .form__btn {
    //             background:#344E99;
    //             width:20%;
    //             border-radius: 15px;

    //         }
            
    //     }
        
    // }
</style>
