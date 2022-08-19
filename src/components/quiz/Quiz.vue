<template>
  <div class="untitlequiz_page p-2 m-2 ">
  
    <div class="untitlequiz_page-header">
        <h2 class="text-center font-weight-bolder">QUESTION 1</h2>
    </div>
    <div class=" show__question justify-content-center align-items-center text-center">
        <b-button
            variant="clear"
            class="show__question__image text-center position-absolute"
            
        >
            <img src="@/assets/sidebars/Preview.png"><span class="mx-2">SHOW QUESTION IMAGE </span>
        </b-button>
    </div>
    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
         <div class="info__1 position-absolute">
              <img src="@/assets/images/info (1).png">
          </div>
        <div class="dropbox">
          <div class="justify-content-center align-items-center text-center">
            <b-button
              variant="clear"
              class="edit-cover_image text-center position-absolute"
              
            >
               <img src="@/assets/sidebars/use_image_answer.png"><span class="mx-2">USE IMAGE ANSWER</span>
            </b-button>
             <b-button
              variant="clear"
              class="answer_setting_btn text-center position-absolute"
              
            >
               <img src="@/assets/sidebars/set_answers.png"><span class="mx-2">ANSWER SETTINGS </span>
            </b-button>
             <b-button
              variant="clear"
              class="set_correctanswer_btn text-center position-absolute"
              
            >
               <img src="@/assets/sidebars/correct_answer_bg.png" class="correct_answer_bg"><span class="mx-2">SET CORRECT ANSWER </span>
            </b-button>
          </div>
           <div class="checkbox_bg mt-5">
             <b-form-group>
               <b-form-checkbox-group class="m-2">
                  <b-form-checkbox>
                    ANSWER B
                  </b-form-checkbox>
               </b-form-checkbox-group>
            </b-form-group>
           </div>
            <div class="checkbox_bg mt-4" >
              <b-form-group>
               <b-form-checkbox-group class="m-2">
                  <b-form-checkbox class="">
                    ANSWER B
                  </b-form-checkbox>
               </b-form-checkbox-group>
            </b-form-group>
           </div>
         
           <div class="add_quiz justify-content-center align-items-center text-center mt-5 m-3">
              <b-button
                to="/question"
                  variant="clear"
                  class="add_quiz_btn text-center m-2"
                  
                  
                >
                <span class="mx-2"><img src="@/assets/sidebars/plus.png">ADD ANSWER</span>
                </b-button>
      </div> 
        </div>
      </form>
       <div class="info__2 position-absolute">
          <img src="@/assets/images/info (1).png">
        </div>
      
       
      
  
  </div>
  
</template>
      
            
          
<script>
      const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    name: 'app',
    data() {
      return {
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
      }
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      }
    },
    methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

        (formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        // save it
        this.save(formData);
      }
    },
    mounted() {
      this.reset();
    },
  }

</script>
<style lang="scss" scoped>
  .untitlequiz_page{
    &-header{
      background:#F6F6F6;
      border-radius:10px;
      margin-top:-50px;
    
    }

  
  .dropbox {
    /* the dash box */
 
    //background: #D9D9D9;
    border: 0.5px dashed #C4C4C4;
    padding: 10px 10px;
    margin-top:100px;
    height: 300px;
    position: relative;
    //cursor: pointer;
    border-radius: 10px;

    }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
    .show__question{
      margin-top:50px;
    
      border-top:0.5px dashed #C4C4C4;
      &__image{
        background:#FFCAD8;
        border-radius: 20px;
        color:#3D3D3D;
        font-weight: 500;
        font-size: 10px;
        width:20%;
        top:250px;
        left:490px;
      }
    }
    .edit-cover_image{
      background:#F6F6F6;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:20%;
      top:-17px;
      left:200px;
      

    }
    .answer_setting_btn{
      background:#F4F4F4;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:20%;
      top:-17px;
      left:380px;
      border-left:1px solid #C4C4C4;
    }
    .set_correctanswer_btn{
      background:#F6F6F6;
      //border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:20%;
      top:-17px;
      right:170px;
      border-left:1px solid #C4C4C4;
    }
   
    .input_description{
      width:100%;
      background: #F7F7F7;
      border-radius: 10px;
      border:1px solid #F7F7F7;
      opacity:1;
      height:40px;
    }
    .checkbox_bg{
      background: #F7F7F7;
      border-radius: 10px;

    }
    .add_quiz{
      border: 0.5px dashed #C4C4C4;
      border-radius: 10px;
      height:60px;
      &_btn{
      background: #E5E5E5;
      border-radius: 10px;
      color:#AFAFAF;
      width:20%;
      font-size:14px;
      }
    }
    .info__1{
      right:100px;
    }
    .info__2{
      right:100px;
      bottom:280px;
    }
    .info__3{
      right:100px;
      bottom:130px;
    }

    

}
     
</style>