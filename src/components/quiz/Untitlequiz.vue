<template>
  <div class="untitlequiz_page p-2 m-2">
  
    <div class="untitlequiz_page-header">
        <h2 class="text-center font-weight-bolder">UNTITLED QUIZ</h2>
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
               <img src="@/assets/sidebars/logo__image.png"><span class="mx-2">EDIT COVER IMAGE </span>
            </b-button>
          </div>
         
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*" class="input-file">
            <p v-if="isInitial">
              <img  height="" src="@/assets/sidebars/Image.png">
            </p>
            <p v-if="isSaving">
              Uploading {{ fileCount }} files...
            </p>
        </div>
      </form>
       <div class="info__2 position-absolute">
          <img src="@/assets/images/info (1).png">
        </div>
      <div class="mt-3">
        <input 
          placeholder="Type your description here"
          class="input_description"
        />
        
      </div>
       <div class="info__3 position-absolute">
          <img src="@/assets/images/info (1).png">
        </div>
      <div class="justify-content-center align-items-center text-center mt-3">
        <b-button
         to="/question"
          variant="clear"
          class="take_quiz text-center"
          
          
        >
          <span class="mx-2">TAKE QUIZ</span>
        </b-button>
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
 
    background: #D9D9D9;
    color: dimgray;
    padding: 10px 10px;
    margin-top:20px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
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
    .edit-cover_image{
      background:#F6F6F6;
      border-radius: 20px;
      color:#AFAFAF;
      font-weight: 500;
      font-size: 10px;
      width:23%;
      top:0px;
      right:330px;
      

    }
    .input_description{
      width:100%;
      background: #F7F7F7;
      border-radius: 10px;
      border:1px solid #F7F7F7;
      opacity:1;
      height:40px;
    }
    .take_quiz{
      background:#EF4873;
      border-radius: 10px;
      color:#FFFFFF;
      width:25%;
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