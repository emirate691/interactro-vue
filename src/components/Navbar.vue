<template>
    <div class="navbar__page position-fixed">   
        <b-row> 
            <b-col cols="" class="">
                
            </b-col>
            <b-col cols="7">
                
               <div class="d-flex">
                    <div class="d-flex upgrade">
                    <div class="upgrade-btn mt-1 mx-2">
                        <b-button variant="clear" class="upgrade-btn" to="/">
                            <span class=""><img class="pr-3" src="@/assets/sidebars/save file.png">All changes saved</span>
                        </b-button>
                        
                    </div>
                    <div class="upgrade-btn  mt-1 mx-2">
                        <b-button variant="clear" class="upgrade-btn___link" to="/">
                            <span class=""><img src="@/assets/sidebars/Preview.png"> </span>
                        </b-button>

                        
                    </div>
                    <div class="upgrade-btn mt-1 mx-2">
                        <b-button variant="clear" class="upgrade-btn___link" to="/">
                            <span class=""><img class="pr-3" src="@/assets/sidebars/save_exit.png"> SAVE & EXIT</span>
                        </b-button>
                        
                    </div>
                    <div class="upgrade-btn mt-1 mx-2">
                        <b-button variant="clear" class="upgrade-btn___link" v-b-modal.modal-1>
                            <span class=""> <img class="pr-3" src="@/assets/sidebars/publish.png"> PUBLISH</span>

                        </b-button>
                        <b-modal 
                            id="modal-1" size="lg"
                            hide-header-close
                            ok-only
                            hide-footer="true"
                            hide-header="true"

                        >
                        <div class="tab">
                            <vue-tabs>
                                b
                            
                            </vue-tabs>
                            </div> 
                            
                        </b-modal>
                        
                        
                    </div>
                    <div class="right__section w-25 mt-1">
                
                    <b-dropdown size="md" variant="clear" right toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                            <b-avatar
                                size="1.5rem"
                                class="mb-5"
                            />
                            <span class="user mx-2">user</span>
                            <span class="">
                                <img class="px-3 dropdown mb-5" src="@/assets/headers/dropdown_arrow.png" alt="dropdown">
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
                    
                    <b-dropdown size="sm" variant="clear" right toggle-class="text-decoration-none" class="noti" no-caret>
                        <template #button-content>
                            <img class="mb-5" height="" src="@/assets/icons/notification.svg" alt="">
                        </template>
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                    </b-dropdown>
                    
                </div>
                

                </div>
            </div>
               
            </b-col>
        </b-row>   
       
    </div>
</template>
<script>

export default {
    name: "Navbar",
    props: "colors",
    data () {
        return {
            color:'',
            background:''
        }
    },
    methods: { 
        setColor(color) {
            this.$emit(color);
        }
    }
    /*data(){
      return {
        bg:"#FFFFFF"
      }
    },
    watch :{
       bg:css_variable_watcher("--bg") 
    },
    
    
};
function css_variable_watcher(name, suffix = "bg") {
    return {
        immediate : true,
        handler(new_value) {
            documentElement.style.setProperty(name, new_value + suffix);
        }
    };*/
}

</script>
<style lang="scss" scoped>
    .navbar__page{
        background:#F4F4F4;
        background-color: var(--bg);
       
        .upgrade{
            position:absolute;
            left:-180px;
           
            color:#000000;
            height:20px;
            &-btn___link{
                color:#000000;
                background:#FFFFFF;
                font-size:12px;
                border:1px solid #FFFFFF;
            }                
                
        }
        .right__section {
            border-radius: 0px 20px 20px 0px;
            background:#FFFFFF;
            height:34px;
           // right:-100px;
            
           // right:100px;
           
          
        }
        .untitlequiz{
            background:#FFFFFF;
            height:500px;
            font-family: 'Roboto', sans-serif;
            bottom:100px;
            left:400px;
        }
        
        .noti{
            position:relative;
            left:130px;
            top:-80px;

        }
        .user{
           
            position:relative;
            top:-25px;
        }
            
                
            
           
        }
       
       
        
</style>