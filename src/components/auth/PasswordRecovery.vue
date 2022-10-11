<template>
    <div class="password_reset__page">
        <b-row class="login__page-container-content pt-0">
             <b-col class="login__page-container-content-left mt-0 h-100">
                <div class="left-block ml-auto pt-3 top ">
                    <div class="pt-5 pl-2 ml-4">
                        <img src="@/assets/images/landing_page_img.png" class="pt-5" />

                    </div>
                </div>

            </b-col>
            <b-col class="login__page-content-right h-100 col-8">
                <div class="right-block  mx-auto">
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
                    </b-form>
                </div>


            </b-col>

        </b-row>
        
    </div>
</template>
<script>
export default {
    
}
</script>