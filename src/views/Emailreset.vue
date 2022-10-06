
<template>
    <b-container fluid>
        <div class="pt-3 position-fixed">
            <img src="@/assets/images/Interactro Logo main 1.png"  height=""/>

        </div>
        <b-row  class="forgot_password d-flex justify-content-center align-items-center">
            <b-col
                class="col-md-12 col-lg-5 vh-100 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="w-100">
                    <div class="mb-4">
                        
                    </div>

                    <div class="p-5 forgot_password_main">
                        <div class="text-center">
                            <h3 class="font-weight-bolder pb-2">
                                Recover your password
                            </h3> 
                            <p>
                                Please enter your registered email address
                            </p>
                        </div>
                        <b-form
                            class=""
                            ref="forgot_password_form"
                            @submit.prevent="handlePasswordRecovery"
                        >

                            <b-form-group class="my-4 font-weight-bold" label="Email">
                                <b-form-input
                                    placeholder="example@domain.com"
                                    type="email"
                                    class="form__input w-100"
                                    v-model="$v.reset.email.$model"
                                    :state="validateState($v.reset.email)"
                                />

                                <b-form-invalid-feedback
                                    id="email-feedback"
                                    :class="{ 'd-block': $v.reset.email.$dirty }"
                                >
                                <ul class="m-0 pl-3 list-unstyled">
                                    <li v-if="!$v.reset.email.required" class="py-1">
                                    Email is required
                                    </li>
                                    <li v-if="!$v.reset.email.email" class="py-1">
                                    Email address is not properly formatted
                                    </li>
                                </ul>
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-button
                                variant="clear"
                                type="submit"
                                class="form__btn w-100 my-3"
                                :disabled="submitting"
                            >
                                SEND RESET EMAIL
                                <b-spinner v-if="submitting" small class="ml-2" />
                            </b-button>
                        </b-form>
                        <div class="d-flex d-flex-column justify-content-center">
                            <small>
                                <b-link href="/" class="backto-login">
                                        Back to Login
                                </b-link>
                                    
                            </small>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
      
    </b-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    name: 'PasswordRecovery',
    
    data: () => ({
        submitting: false,
        reset: {
            email:'',
        },
    }),
    validations: {
        reset: {
            email:{
                required,
                email
            },
        },
    },
    methods: {
        // validate form input
        validateState(reset) {
            const { $dirty, $error } = reset;
            return $dirty ? !$error : null;
        },

        async handlePasswordRecovery() {
            // validation check
            this.$v.reset.$touch();
            if (this.$v.reset.$anyError) return false;

            // disable submit button
            this.submitting = true;

            try {
                const res = await this.$store.dispatch('user/password_recovery', this.reset);
                if (res.status == 200) {
                    if(res.data.status === 'error') {
                        this.$swal("OOPS !!!", res.data.message, "error");
                        this.submitting = false;
                    } else {
                        this.$swal("Success !!!", res.data.message, "success");
                        this.$router.push({
                            path: "/auth/password-reset",
                            query: { email: this.reset.email }
                        });
                    }
                }
                
            } catch (e) {
              let message = this.$getErrorMessage(e);
              this.$swal("Oops !!!", message, "error");
            }
            this.submitting = false;
        },

    }
}
</script>

<style lang="scss">

.forgot_password {
    // background-image: url('~/assets/svg/triangle-spray.svg');
    background-repeat: no-repeat;
    background-position:  center;
    &_edge{
        span {
            font-size: 15px;
        }
    }
    &_main{
        background-color: white;
        border-radius: 10px;
    }
    .form__input{
        background: #F8F8F8;
        //width:80%;
        height:50px;
        border:1px solid #E4E4E4;
        border-radius:10px;
            }
    .form__btn{
        background-color:#344E99;
        color:#FFFFFF;
    }
    .backto-login{
        font-size:15px;
        font-weight:400;
        color:#344E99;
    }
}

</style>
