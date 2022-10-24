<template>
    <div class="upload__image">
        <div class="container postion-absolute d-flex justify-content-center align-items-center text-center">
            <div class="">
                <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving" class=" pt-5 p-5">
                    <div class="text-left">
                        <h5 class=" upload-file text-white">Upload files</h5>
                    </div>
                    <div class="dropbox d-flex ">
                        <div class="upload mt-4 mx-5 ">
                            <img src="@/assets/icons/Upload.png" class="mt-3">
                            
                        </div>
                            <input type="file"  
                                class="mt-5 mx-2 input-file" 
                                :name="uploadFieldName"  
                                :disable="isSaving"
                                @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.lenght"
                                accept="image/*"
                            />
                    
                        <p v-if="isInitial">
                        
                        </p>
                        <p v-if="isSaving">  
                            Uploading {{ fileCount }}files...  
                        </p>
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
                <!-- success-->
                <div v-if="isSuccess">
                    <h2> {{ uploadedFiles.length }} </h2>
                    <p>
                        <a href="javascript:void(0)" @click="reset()"></a>
                    </p>
                    <ul class="list-unstyled">
                        <li> v-for="item in uploadFiles">
                            <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
                        </li>
                    </ul>
            </div>
            <!--failed -->
            <div v-if="isFailed">
                <h2></h2>
                <p>
                    <a href="javascript:void(0)" @click="reset()"></a>
                </p>
                <pre>{{ uploadError }}</pre>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { upload } from '../upload.fake.service'
//import { upload } from '../upload.service'
import { wait } from '../utils'
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2,  STATUS_FAILED = 3; 
export default {
    name: 'UPLOAD',
    data() {
        return {
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            uploadFieldName: 'photo'
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
         // reset from to initial state
         this.currentStatus = STATUS_INITIAL;
         this.uploadedFiles = [];
         this.uploadError = null;

        },
        save(formData) {
            // upload data to server
             this,this.currentStatus = STATUS_SAVING;

             upload(formData)
             .then(wait(1500)) // Dev only : wait for 1.5s
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
            // handle file change
            const formData = new FormData();
            if (!fileList.length) return;

            // append the files to FormData
            Array
              .form(Array(fileList.length).keys())
              .map(x => {
                formData.append(fieldName, fileList[x], fileList[x].name)
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
    .upload__image {
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
    }
</style>