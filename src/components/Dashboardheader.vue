<template>
    <b-container fluid>
        <div class=" header d-flex justify-content-start">
            <div class="header__logo left-block">
                <img class="mx-5 my-3" src="@/assets/headers/dashboard_logo.png">
            </div>
            <div class="header__link mt-4">  
              
                <router-link class="header__link__quiz mx-3" to="/">Quizzes</router-link>
                <router-link class="header__link__polls mx-3" to="/emailVerified">Polls</router-link>
                <router-link class="header__link__giveaways mx-3" to="/question">Giveaways</router-link>
        
            </div>
            <div class="right-block mx-auto d-flex justify-content-end">
                <div class="upgrade-btn mt-3">
                    <b-button class="upgrade-btn___link" to="/">
                       <span class=""> UPGRADE</span>
                    </b-button>
                </div>
                
                <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" no-caret>
                    
                    <template #button-content>
                        <b-avatar
                            size="2rem"
                        />
                        <span class="mx-2">user name</span>
                        <span class="">
                            <img class="px-3" src="@/assets/headers/dropdown_arrow.png" alt="dropdown">
                        </span>
                    </template>
                    <b-dropdown-item href="#">
                        <b-icon icon="gear-fill" aria-hidden="true" />
                        Settings
                    </b-dropdown-item>
                    <b-dropdown-item >
                        <span @click.prevent="logout">
                            <b-icon icon="power" aria-hidden="true" />
                            Logout
                        </span>
                    </b-dropdown-item>
                </b-dropdown>
                <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" class="noti" no-caret>
                    <template #button-content>
                        <img class=""  src="@/assets/icons/notification.svg" alt="">
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                </b-dropdown>
            </div>        
        
        </div>
   
    </b-container>

</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .header{
        background:#FFFFFF;
        
        &__logo{
            background: #313F68;
            border-radius: 0px 20px 20px 0px;
            margin-left:-30px;
        }
        &__link{
            font-size:18px;
            
            &__quiz{
                color:#353535;
                text-decoration: none;
            }
            &__polls{
                color:#B8B8B8;
                text-decoration: none;
                
            }
            &__giveaways{
                color:#B8B8B8;
                text-decoration: none;
            }

        }
        .right-block{
            position:relative;
            right:-300px;
            .upgrade-btn{
                background: #FFCAD8;
                border-radius: 5px;
                height:35px;
                &___link{
                    color: #FFFFFF;
                    font-size:16px;
                     background: #FFCAD8;
                     border-radius: 5px ;
                     border: 1px solid #FFCAD8;
                    
                    
                    
                }
            }
            .noti{
                margin-left:-30px;
            }
        }
    }
</style>