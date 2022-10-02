<template>
    <div class="login__page-container">
        <b-row class="login__page-container-content pt-0" sm="6">
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
                            <h4><img src="@/assets/images/Emoji.png" class="ml-5" /><span class="text-1 ml-2">Welcome back Goody!</span></h4>
                            
                        </div>

                    </div>
                    <b-form 
                        class="login__form mx-5"
                        ref="login__form"
                        @submit.stop.prevent="submitForm"
                    >
                        <b-form-group class="mb-3 ml-5 pl-5" id="example-input-group-1" label="Email" label-for="example-input-1">
                           
                            <b-form-input
                                id="example-input-1"
                                name="example-input-1"
                                placeholder="Goodywlson1@outlook.com"
                                type="email"
                                class="form__input"
                                v-model="$v.login.email.$model"
                                :state="validateState('email')"
                                aria-describedby="input-1-live-feedback"

                                
                            />
                            <b-form-invalid-feedback
                                id="email-feedback"
                                :class="{ 'd-block': $v.login.email.$dirty }"
                            >
                            <ul class="m-0 pl-3 list-unstyled">
                               <li v-if="!$v.login.email.required || !$v.login.email.email">
                                    Email is required & must be valid 
                               </li>
                            </ul>
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group class="mb-3 ml-5 pl-5 my-4" id="example-input-group-2" label="Password" label-for="example-input-2"> 
                            
                            <b-form-input
                                placeholder="***********"
                                :type="showPassword ? 'text' : 'password'"
                                class="form__input"

                                id="example-input-2"
                                name="example-input-2"
                                
                                v-model="$v.login.password.$model"
                                :state="validateState('password')"
                                aria-describedby="input-2-live-feedback"

                                                       
                            
                            />
                            <div class="input_addon" @click="showPassword = !showPassword">
                                    <b-icon v-if="showPassword" icon="eye" aria-hidden="true" />
                                    <b-icon v-else icon="eye-slash"    aria-hidden="true" />
                            </div> 
                            <b-form-invalid-feedback
                                id="email-feedback"
                                :class="{ 'd-block': $v.login.password.$dirty }"
                            >
                            <ul class="m-0 pl-3 list-unstyled">
                                <li 
                                    v-if="!$v.login.password.required"
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
                                        
                                        to="passwordRecovery"
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
import { required} from "vuelidate/lib/validators";
export default {
    name: "LoginForm",
    data(){
        
        return {
            
            login: {
                email: "",
                password: ""
            },
             
            showPassword:false
        }
    },
    validations: {
        login: {
            email: {
               required
               
               
            },
            password: {
               required
            }
        }
    },
    methods: {
        validateState(login) {
            const { $dirty, $error } = login;
            return $dirty ? !$error : null;
        },
        async submitForm() {
            // disable submit button
            this.submitting = true;

            
             // validation check
            this.$v.login.$touch();
            if (this.$v.login.$anyError) {
                this.submitting = false;
            } else {
                try {
                    // login user
                    await this.$store.dispatch('user/login', {data: this.login});

                    // redirect to home page or intended route
                    this.$router.push(
                        this.$route.query.redirect ? this.$route.query.redirect : "/"
                    );

                } catch (err) {
                    console.log(err);
                    // enable submit button
                    this.submitting = false;
                    // error alert
                    this.$swal("OOPS!", "Invalid Login Credentials", "error", "OK");
                }
            }
            
        },
        handleSocialAuth(type) {
            console.log('login with --> ', type);
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

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
                    font-family: 'Poppins', sans-serif;
                    font-weight:600;
                    font-size:20px;
                }

                
            }
            &-right {
                background: #fff;
                
            }
            .input_addon {
               cursor: pointer;
                position: absolute;
                right:240px;
                bottom: 280px;
                    
                
            }
            .text-recovery{
                color:#D12551;
            }
            .form__input{
                background: #F8F8F8;
                width:80%;
                height:50px;
                border:1px solid #E4E4E4;
                border-radius:10px;
            }
            .form__btn {
                background:#344E99;
                width:20%;
                border-radius: 15px;

            }
            
        }
        
    }
</style>
