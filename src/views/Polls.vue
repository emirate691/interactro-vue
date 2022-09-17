<template>
    <div class="dashboard__container w-100 h-100">
        <b-container fluid>
            <div class="dashboard__container__header">
                <b-row class="">
                    <b-col>
                        <Dashboardheader/>
                    
                    </b-col>
                </b-row>
                <div class="m-5 pb-3 dashboard__container__form">
                    <b-row>
                        <b-col>
                            <div class="dashboard__container__form-left-block justify-content-left align-items-left text-left">
                            
                            <h1 > PollS</h1>
                            </div>
                            </b-col>
                        <b-col>
                            <div class="dashboard__container__form-right-block justify-content-right align-items-right text-right">
                                    <b-button
                                    class="create-btn"
                                    >
                                        + CREATE NEW POLLS
                                    </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
            
            <div class="dashboard_items">
                <Pollsitems />
            </div>
        </b-container>  
        

    </div>
    
</template>

<script>

import Dashboardheader from '../components/Dashboardheader.vue'
import Pollsitems from '../components/Pollsitems.vue'

export default {
    
    name:'Dashboard',
    components: { Dashboardheader , Pollsitems }
}
</script>
<style lang="scss" scoped>
    .dashboard__container{
        background:#F6F6F6;
         background:#FFFFFF;
        &__header{
           background:#FFFFFF;
        }
        &__form{
            
        .create-btn{
                    background: #EF4873;
                    border:1px solid #EF4873
            }
        }
        
    }
    

</style>
