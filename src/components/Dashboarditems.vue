   <template>
    <div class="dashboard__item">
      <div class="p-5 dashboard__item_content">
        <div 
         
        >
        <b-row>
      
         
          <b-col lg="6" class="my-1">
            <b-form-group
              label="Sort by"
              label-for="initial-sort-select"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="sort_by mb-0"
            >
              <b-form-select
                id="initial-sort-select"
                v-model="sortDirection"
                
                :options="['Date', 'Title', 'last']"
                size="sm"
                class="select__type"
              ></b-form-select>
              <b-input-group-append>
                  <div v-on:click="ascending">
                    <span class="sort__icon" v-if="ascending"><img src="@/assets/icons/sort.png"  /></span>
                    
                  </div>
                </b-input-group-append>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="my-1">
            <b-form-group
             
              label-for="search-input"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="search mb-0 "
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="searchValue"
                  type="search"
                  placeholder="Search"
                  class="search__input"
                ></b-form-input>
                <div class="search_icon">
                    <img src="@/assets/icons/search_icon.png" height="20px"/>
                </div> 

                <!--b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append-->
              </b-input-group>
            </b-form-group>
          </b-col>
        
       </b-row>

      </div>
        
      </div>
        <div class="white__bg mx-5 mb-3">
          <div v-for="quiz in filteredQuizes" :key="quiz.title">
            <b-row>
              <span class="mx-5 mt-2 untitle_quiz">{{ quiz.title }}</span>
              <b-col class="m-3 pl-5">
              
                <span class="">
                  <span class="untitle_quiz_icon p-2"><img class="mx-2" src="@/assets/icons/untitle_quiz_icon.png">Personal</span>  
                  <span class="mx-2">created {{ currentDate() }}</span> 
                  <span>
                    <b-button
                      class="preview__quiz"
                    >
                      Preview Quiz

                    </b-button>
                  </span>
                </span> 
              </b-col>
              <b-col class="m-3 pt-3 col-4 group_buttons position-relative">
                <b-button
                  variant="claer"
                  class="mX-1 quiz__btn"
                  to="/quizeditor"
                >
                  EDIT
                </b-button>
                <b-button
                  class="mx-1 quiz__btn"
                >
                  SHARE & EMBED
                </b-button>
                <b-button
                  class="mx-1 quiz__btn"
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
          

          <div class="white__bg mb-3 mx-5" v-for="list in lists" :key="list.title">
            <b-row>
              <span class="mx-5 mt-2 title">{{ list.title }}</span>
              <b-col class="m-3 pl-5">
                
                <span class="">
                  <span class="title__icon p-1"><img class="mx-2" src="@/assets/icons/title__quiz_icon.png">+</span>  
                  <span class="mx-2">created  {{ currentDate() }}</span>
                  <span>
                    
                  </span>
                </span>
              </b-col>
              <b-col class="m-3 col-4 pt-3 group_buttons position-relative">
                <b-button
                  variant="claer"
                  class="mX-1 quiz__btn"
                  to="/quizeditor"
                >
                  EDIT
                </b-button>
                <b-button
                  variant="claer"
                  class="mx-1 quiz__btn"
                >
                  SAHRE & EMBED
                </b-button>
                <b-button
                  variant="claer"
                  class="mx-1 quiz__btn"
                >
                  ANALYTICS
                </b-button>
                
                <b-button
                  variant="claer"
                  class="mx-1 icon_btn"
                >
                  <img src="@/assets/icons/options.png">
                </b-button>
              </b-col>
            </b-row>
          </div>
          <div class="white__bg mb-3 mx-5" v-for="item in items" :key="item.title">
            
            <b-row>
              <span class="quiz_1 mx-5 mt-2">{{ item.title}}</span>
              <b-col class="m-3 pl-5">
                
                <span class="">
                  <span class="title__icon p-1"><img class="mx-2" src="@/assets/icons/title__quiz_icon.png">+</span>  
                  <span class="mx-2">created {{ currentDate() }}</span> 
                  <span>
                    
                  </span>
                </span>
                
              </b-col>
              <b-col class="m-3 col-4 pt-3  group_buttons position-relative">
                <b-button
                  variant="claer"
                  class="mX-1 quiz__btn"
                  to="/quizeditor"
                  
                >
                  EDIT
                </b-button>
                <b-button
                  variant="claer"
                  class="mx-1 quiz__btn"
                >
                  SAHRE & EMBED
                </b-button>
                <b-button
                  class="mx-1 quiz__btn"
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
           <b-col md="6" class="my-1">
              <span class="my-0" :total-rows="totalRows" >>ALL ROWS</span>
          </b-col>

        
      </div>
    
           
        
</template>
<script>
  export default {
    data() {
      return {
        ascending: true,
        sortBy: 'date',
        searchValue: '',
        quizes: [
          { title: 'Untitle quiz', date: ''},
          
        ],
        lists: [
          {title: 'Do you have what it takes to make your blog blast-off', date: ''},
         
        ],
        items:[
          {title: 'quiz', date: ''}
        ]
       
          
      }
    },
    computed: {
  filteredQuizes() {
    let tempQuizes = this.quizes
    
    // Process search input
    if (this.searchValue != '' && this.searchValue) {
        tempQuizes = tempQuizes.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }
      
      
           
    // Sort by alphabetical order
        tempQuizes = tempQuizes.sort((a, b) => {
            if (this.sortBy == 'date') {
                let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()
          
              if (fa < fb) {
                return -1
              }
              if (fa > fb) {
                return 1 
              }
              return 0
              
              // Sort by cooking time
            } else if (this.sortBy == 'title') {
              return a.title - b.title
        }
        })
        
        // Show sorted array in descending or ascending order
        if (!this.ascending) {
        	tempQuizes.reverse()
        }
        
        return tempQuizes
      }
    
    },
    methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
      return date;
    }
  }
  }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');

    .dashboard__item{
        background:#F6F6F6;
      
       
        height:680px;
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
          .search-input{
            position: absolute;
            right:0px;
          }
          .untitle_quiz{
            font-family:'Roboto';
            font-weight:500;
            font-size:20px;
            color:#D12551;

          }
          .title, .quiz_1{
            font-family:'Roboto';
            font-weight:500;
            font-size:20px;
            color:#353535
          }
          .group_buttons{
            top:-20px;
          }
          .sort_by{
            width:250px;
            font-family:'Roboto', sans-serif;
            font-weight:700;
            color:#353535;
            
   

          }
          .search{
            margin-left:200px;
          }
          .search__input {
            height: 45px;
            width:70px;
            background: #FFFFFF;
            border: 1px solid #B8B8B8;
            border-radius: 5px;
            color:#B8B8B8;
          }
          .search_icon{
            position:absolute;
            right:30px;
            top:11px;
          }
          .quiz__btn{
            font-family: 'Roboto', sans-serif;
            font-weight:500;
            color: #000000;
            
            //font-size:13px;
          }
          .select__type{
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #B8B8B8;
            border-radius: 5px;
            
          }
          .sort__icon{
            position:absolute;
            top:5px;
            left:200px;
            //background:#FFFFFF;
          }
          
    }
</style>