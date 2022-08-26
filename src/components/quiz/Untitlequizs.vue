<template>
    <div class="untitlequiz_page p-2 m-2">
        <div class="untitlequiz_page-header">
            <h2 class="text-center font-weight-bolder">UNTITLED QUIZ</h2>
        </div>
        <div>
            <div class="info__1 position-absolute">
                 <img src="@/assets/images/info (1).png">
            </div>
            <div class="frame">
                <div class="justify-content-center align-items-center text-center">
                     <div class="edit_coverimage">
                        <div class="edit_coverimage__header">
                            <div class="edit_coverimage__search-container">
                                <button type="button" class="edit-cover_image text-center position-absolute" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="@/assets/sidebars/use_image_answer.png" class="mr-2">Edit image
                                </button>


                                <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            
                                          <div>
                                            <b-tabs class="active tab-header">
                                               
                                                <b-tab title="Search image" class="tab-header__item">
                                                   <div class="url_container pt-5 d-flex  justify-content-center align-items-center text-center">
                                                        <form class="url_container__form text-center pt-5">
                                                           
                                                            <div class="d-flex ">
                                                                <input type="search" class="w-100"/>
                                                                <b-button 
                                                                    class=""
                                                                    variant="clear"
                                                                >
                                                                    Find Images
                                                                </b-button>
                                                           </div>
                                                            
                                                        </form>
                                                        
                                                        
                                                    </div>
                                                </b-tab>
                                                
                                                <b-tab title="Upload image" class="tab-header__item">
                                                    <div class="container postion-absolute d-flex justify-content-center align-items-center text-center">
                                                        <div class="">
                                                            <form enctype="multipart/form-data" class=" pt-5 p-5" novalidate v-if="isInitial || isSaving">
                                                                <div class="text-left">
                                                                    <h5 class=" upload-file text-white">Upload files</h5>
                                                                </div>
                                                                <div class="dropbox d-flex ">
                                                                    <div class="upload mt-4 mx-5 ">
                                                                        <img src="@/assets/icons/Upload.png" class="mt-3">
                                                                        
                                                                    </div>
                                                                        <input type="file"  class="mt-5 mx-2 upload-file-input" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*"/>
                                                               
                                                                    <p v-if="isInitial">
                                                                    
                                                                    </p>
                                                                    <p v-if="isSaving">  Uploading {{ fileCount }} files...  </p>
                                                                </div>
                
                                                                <div class=" position-absolute text-left mt-3 text-white">
                                                                   <div class="upload_auth mt-2">
                                                                       <span class="">Recommended dimensions:</span>
                                                                       <span class="mx-5 px-3 justify-content-left">  900px by 400px</span>
                                                                    </div>
                                                                    <div class="upload_auth mt-2">
                                                                       <span class="">Supported file types:</span>
                                                                        <span class="mx-5 px-5">JPG, PNG, GIF</span>
                                                                    </div>
                                                                    <div class="upload_auth mt-2">
                                                                       <span class="">Maximum image size:</span>
                                                                        <span class="mx-5 px-5">2megabytes(MB)</span>
                                                                    </div>
                                                                </div>    
                                                                
                                                            </form>
                                                        </div>
                                                    </div>

                                                </b-tab>
                                                <b-tab title="URL" class="tab-header__item"> 
                                                    <div class="url_container pt-5 d-flex  justify-content-center align-items-center text-center">
                                                        <form class="url_container__form text-center pt-5">
                                                            <div class="justify-content-left align-items-left text-left">
                                                                <h5 class="url_container__heading text-left">Image from the web</h5>
                                                            </div>
                                                            <div class="url_container__box">
                                                                <div class="justify-content-left align-items-left text-left">
                                                                    <div class="pt-3">
                                                                        <p class=" url_container__para position-relative text-left p-3">Note: This image can not be edited - this is a direct link to the URL</p>
                                                                        </div>
                                                                        <b-input-group class="url__input p-3 pb-5 ">
                                                                        <template #prepend>
                                                                            <b-input-group-text  class="url_container_bg"><img src="@/assets/icons/Url.png" height="20px"></b-input-group-text>
                                                                        </template>
                                                                        <b-form-input placeholder="Enter image URL ...."></b-form-input>
                                                                    </b-input-group>
                                                                    <b-button 
                                                                        variant="clear"
                                                                        class="m-3 save-btn mt-5"
                                                                    >
                                                                        SAVE IMAGE
                                                                    </b-button>
                                                                </div>
                                                                
                                                                
                                                            </div>
                                                            <div class=" position-absolute text-left mt-3 text-white">
                                                                <div class="upload_auth mt-2">
                                                                    <span class="">Recommended dimensions:</span>
                                                                    <span class="mx-5 px-3 justify-content-left">  900px by 400px</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </form>
                                                        <div>
                                                           
                                                        </div>
                                                        
                                                    </div>
                                                </b-tab>
                                            </b-tabs>
                                            <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
    
                                        </div>  
                                            
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
      

            
         
            </div>
                <input type="button"  class="input-file" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>
                    <img  height="" src="@/assets/sidebars/Image.png">
                </p>

            </div>
        </div>
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
   // import Untitlequiz from  '../components/quiz/Untitlequiz.vue'
   //import { upload } from './file-upload.service';

    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
    export default {
       name: 'Untitlequiz',
       /*components: {  Untitlequiz }*/
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
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');

    .untitlequiz_page{
        &-header{
            background:#F6F6F6;
            border-radius:10px;
            margin-top:-50px;
    
        } 
        .frame {

 
            background: #D9D9D9;
            color: dimgray;
            padding: 10px 10px;
            margin-top:20px;
            min-height: 200px; 
            position: relative;
            cursor: pointer;
            border-radius: 10px;
            p {
                font-size: 1.2em;
                text-align: center;
                padding: 50px 0;
 
            }

        } 
        .input-file {
            opacity: 0;
            width: 100%;
            height: 200px;
            position: absolute;
            cursor: pointer;
        } 
        .edit-cover_image{
            background:#F6F6F6;
            border-radius: 20px;
            color:#AFAFAF;
            font-weight: 500;
            font-size: 15px;
            width:15%;
            top:0px;
            right:400px;
            border:1px solid #F6F6F6;
            

        }
        .input_description{
            width:100%;
            background: #F7F7F7;
            border-radius: 10px;
            border:1px solid #F7F7F7;
            opacity:1;
            height:40px;
        }
        .input_description::placeholder{
            text-align:center;
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
        .modal-content{
            position:absolute;
            background: #1B2647;
            width:1000px;
            left:-150px;
            height:500px;
           
        }
        .tab-header{
             background: #3E5189;

             &__item{
                background:#1B2647;
                 
             }
        }
        
        
                                               
        
        .btn-close{
            top:0;
            right:0;
        }

        .dropbox {
            
            background: #313F68; 
            border: 0.3px dashed #FFFFFF;
            border-radius: 5px;
            position: relative;
            cursor: pointer;
        }

        .dropbox p {
            font-size: 1.2em;
            text-align: center;
            padding: 50px 0;
        }
        .upload{
            background: #6379B9;
            border-radius: 10px;
            width:60px;
            height:60px;
        }
        .upload-file {
            font-family: 'Roboto', sans-serif;
            font-size:20px;
            font-weight:700;
        }
        .upload_auth {
            color:#AFAFAF;
            font-family: 'Roboto', sans-serif;
            font-size:10px;

        
        }
        .url_container{
           
            &__box{
                background: #313F68;
               
                border: 0.3px dashed #FFFFFF;
                border-radius: 5px;
                

            }
            &_bg{
                background:#6379B9;
            }
            &__heading{
                color:#FFFFFF;
                font-size:20px;
                font-family:'Roboto', sans-serif;
                font-family:700;
            }
            &__para{
                font-family:'Roboto', sans-serif;
                color:#C4C4C4;
                font-size:9px;
                font-family:'Roboto', sans-serif;
                //font-family:700;


            }
            
        }
            
                
            .url__input{
                position:absolute;
                width:60%;
                bottom:160px;

                
              
            }
            .save-btn{
                background:#EF4873;
                color: #FFFFFF;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 500;
                margin-bottom: 100px;
            }


    }
</style>