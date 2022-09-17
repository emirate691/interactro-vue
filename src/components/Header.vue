<template>
    <b-container fluid>
        <div class="">
            <div class=" header d-flex justify-content-start ">
                <div class="left-block header_logo">
                    <img class="mx-5 my-3" src="@/assets/headers/dashboard_logo.png">

                </div>
                <div class="right-block mx-auto d-flex justify-content-end ">
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
                    
                </div>        
            
            </div>
        </div>
   
    </b-container>

</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .left-block{
        background: #313F68;
        border-radius: 0px 20px 20px 0px;
        margin-left:-15px;
    }
    .right-block{
    
        position:relative;
        right:-500px;
        
    }
</style>