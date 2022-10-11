<template>
    <b-row class="login__page h-100" align-v="stretch">
        <img src="@/assets/images/landing_page_img.png" class="d-none d-md-block landing_page_img" />
        <b-row>
            <b-col cols="4" class="h-100 d-none d-md-block">
                <div class="login__page-left-section">
                </div>
            </b-col>
            <b-col>
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="login__page-right-section">
                        <img src="@/assets/images/Interactro Logo main 1.png" class="mb-4" />
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/Emoji.png" class="" />
                            <h4 class="pl-2">Welcome back Goody!</h4>
                        </div>
                        <b-form action="" class="py-5 w-100">
                            <b-form-group
                                label="Email"
                            >
                    
                                <b-form-input
                                    id="email"
                                    name="email"
                                    placeholder="Goodywlson1@outlook.com"
                                    type="email"
                                    class="form__input"
                                />
                            </b-form-group>

                            <b-form-group
                                label="Password"
                                class="password_input"
                            >
                    
                                <b-form-input
                                    :type="showPassword ? 'text' : 'password'"
                                    id="password"
                                    name="password"
                                    class="form__input"
                                />
                                <div class="input_addon" @click="showPassword = !showPassword">
                                    <b-icon :icon="showPassword ? 'eye' : 'eye-slash'" aria-hidden="true" />
                                </div> 
                            </b-form-group>

                            <b-row>
                                <b-col cols="8" >
                                    <div class="mb-3 d-flex justify-content-between align-items-center">
                                        <span>Sign In With</span>
                                        <span>
                                            <img class="" src="@/assets/icons/google 1.svg" />
                                        </span>
                                        <span>
                                            <img  class="" src="@/assets/icons/facebook 1.svg" />
                                        </span>
                                    </div>
                                </b-col>
                            </b-row>
                            <div>
                                <p>Forgotten Password? <a href="#">Reset Your Password</a></p>
                            </div>
                            <div class="d-lg-flex d-md-flex-column align-items-center">
                                <b-button
                                    variant="danger"
                                >
                                    Login
                                    <b-icon icon="arrow-right" />
                                </b-button>
                                <div class="pl-md-4">
                                    Don't have an account? <b-link href="/auth/register">Sign Up!</b-link>
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
import { required} from "vuelidate/lib/validators";
export default {
    name: "LoginForm",
    data(){
        
        return {
            
            login: {
                email: "",
                password: ""
            },
             
            showPassword: false
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
            } /*else {
                try {
                    // login user
                    await this.$store.dispatch('/login', {data: this.login});

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
            }*/
            
        },
        handleSocialAuth(type) {
            console.log('login with --> ', type);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

    .login__page {
        position: relative;
        &-left-section {
            background-color: #6379B9;
            min-height: 100vh;
        }
        .landing_page_img {
            position: absolute;
            bottom: 0;
            width: 40em;
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
