<template>
    <div class="col-12 position-fixed">    
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
        </div>
         <div class="right-block mx-auto d-flex justify-content-end position-absolute">
                
                
                
            <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" no-caret>
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
                        <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" class="noti" no-caret>
                    
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                    
                    </b-dropdown>
                
                 </b-dropdown>
                <b-dropdown size="lg" variant="clear" right toggle-class="text-decoration-none" class="noti" no-caret>
                    <template #button-content>
                        <img class="mb-5" height="" src="@/assets/icons/notification.svg" alt="">
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                </b-dropdown>

            </div>
            
       
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
.untitle__page{
            background:#F4F4F4;
            background-color: var(--bg);
            height:800px;
           
            
            .right-block{
               // background:#FFFFFF;
               // border-radius: 0px 20px 20px 0px;
                background:#FFFFFF;
                height:38px;
                border-radius: 20px 0px 0px 20px;
                right:0;
                top:-40px;
                //transform: matrix(-1, 0, 0, 1, 0, 0);
            
                
            }
           
            
            .noti{
                margin-left:-41px;
            }
            .user{
                position:relative;
                top:-23px;
                
            }
            .upgrade{
                position:absolute;
                right:200px;  
                top:-40px;
                color:#000000;
                height:20px;
                &-btn___link{
                    color:#000000;
                    background:#FFFFFF;
                    font-size:12px;
                    border:1px solid #FFFFFF;
                }                
                    
            }
            .untitlequiz{
                background:#FFFFFF;
                height:500px;
                font-family: 'Roboto', sans-serif;
                bottom:100px;
                left:400px;
            }
            .power-by{
                right:13px;
                bottom:10px;
            }
            .remove_logo{
                bottom:65px;
                right:50px;
            }
            
                
            
           
        }
       
       
        
</style>