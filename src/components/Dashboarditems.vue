   <template>
    <div class="dashboard__item">
      <div class="p-5 dashboard__item_content">
        <b-row class="mx-5">
          
            <b-col class="col-6 ">
              <b-form-group>
                
                <b-form-input
                  class="w-25"
                >
                
                </b-form-input>
              
                </b-form-group>
            </b-col>
          
          <b-col class="col-6">
            <b-form-group>
              <b-form-input
              class="w-50"
              v-model="search"
              placeholder="Search"
              
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        
        </b-row>
      </div>
        <div class="white__bg mx-5 mb-5">
          <b-row>
            <b-col class="m-3 pl-5">
              <h3>{{quizes.title}}</h3>
              <span class="">
                <span class="untitle_quiz_icon p-2"><img class="mx-2" src="@/assets/icons/untitle_quiz_icon.png">Personal</span>  
                <span class="mx-2">created</span> 
                <span>
                  <b-button
                    class="preview__quiz"
                  >
                    Preview Quiz

                  </b-button>
                </span>
              </span>
            </b-col>
            <b-col class="m-3 pt-3 col-4">
              <b-button
                class="mX-1"
              >
                EDIT
              </b-button>
              <b-button
                class="mx-1"
              >
                SHARE & EMBED
              </b-button>
              <b-button
                class="mx-1"
              >
                ANALYTICS
              </b-button>
              <b-button
                class="mx-1 icon_btn"
              >
                <img src="@/assets/icons/options.png">
              </b-button>
              
              
            </b-col>
          </b-row>

        </div>

        <div class="white__bg mb-5 mx-5">
          <b-row>
            <b-col class="m-3 pl-5">
              <h1></h1>
              <span class="">
                <span class="title__icon p-1"><img class="mx-2" src="@/assets/icons/title__quiz_icon.png">+</span>  
                <span class="mx-2">created</span> 
                <span>
                  
                </span>
              </span>
            </b-col>
            <b-col class="m-3 col-4 pt-3">
              <b-button
                class="mX-1"
              >
                EDIT
              </b-button>
              <b-button
                class="mx-1"
              >
                SAHRE & EMBED
              </b-button>
              <b-button
                class="mx-1"
              >
                ANALYTICS
              </b-button>
              
              <b-button
                class="mx-1 icon_btn"
              >
                <img src="@/assets/icons/options.png">
              </b-button>
            </b-col>
          </b-row>
        </div>
        <div class="white__bg mb-5 mx-5">
          <b-row>
            <b-col class="m-3 pl-5">
              <h3>mmmm</h3>
              <span class="">
                <span class="title__icon p-1"><img class="mx-2" src="@/assets/icons/title__quiz_icon.png">+</span>  
                <span class="mx-2">created</span> 
                <span>
                  
                </span>
              </span>
              
            </b-col>
            <b-col class="m-3 col-4 pt-3">
              <b-button
                class="mX-1"
              >
                EDIT
              </b-button>
              <b-button
                class="mx-1"
              >
                SAHRE & EMBED
              </b-button>
              <b-button
                class="mx-1"
              >
                ANALYTICS
              </b-button>
              <b-button
                class="mx-1 icon_btn"
              >
                <img src="@/assets/icons/options.png">
              </b-button>
              
            </b-col>
          </b-row>
        </div>

        
      </div>
    
           
        
</template>

<script>
  export default {
    data() {
      return {
        quizes:[
          {title:'untitle' , descrition:'quiz'}
        ],
        search:''
        
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>
<style lang="scss" scoped>
    .dashboard__item{
        background:#F6F6F6;
        height:580px;
        .white__bg{
          background:#FFFFFF;
          border-radius: 10px;

         
        }
        
         .btn{
            background: #E5ECFF;
            border:1px solid #E5ECFF;
            color:#000000;
          }
          .icon_btn{
            background: #FFFFFF;
            border: transparent;
          }
          .untitle_quiz_icon{
            background: #D12551;
            color:#F6F6F6;

          }
          .title__icon{
            background: #DEDEDE;
            color: #B8B8B8;
          }
          .preview__quiz{
             background: #FFFFFF;
            border: transparent;
            color: #D12551;
          }

    }
</style>