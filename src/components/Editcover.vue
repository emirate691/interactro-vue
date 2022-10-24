<template>
    <div class="editcover__page">
        <div class="editcover__page-container d-flex justify-content-center align-items-center text-center">

             <button type="button" class="editcover__page-container__image position-absolute" data-bs-toggle="modal" data-bs-target="#editimage">
                <img src="@/assets/sidebars/use_image_answer.png" class="mr-2">Edit image
            </button>
             <div class="modal fade w-100"  id="editimage" tabindex="-1" aria-labelledby="editimagelabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                       <div class="tab">
                            <b-tabs  class="tab-header" active-nav-item-class=""  active-tab-class="font-weight-bold">
                                 <b-tab  class="tab-header__item">
                                    <template slot="title">
                                        <span class=""><img src="@/assets/icons/tab_search.png" class="mt-2"></span>
                                        <span class="mx-3">Search for Images</span>
                                    </template>
                                     <Searchimage />
                                 </b-tab>
                                 <b-tab  class="tab-header__item">
                                    <template slot="title">
                                        <span class=""><img src="@/assets/icons/Upload.png"></span>
                                        <span class="mx-3">Upload image</span>
                                    </template>
                                    <Uploadimage />
                                 </b-tab>
                                 <b-tab  class="tab-header__item">
                                    <template slot="title">
                                        <span class=""><img src="@/assets/icons/Url.png"></span>
                                        <span class="mx-3">URL</span>
                                    </template>
                                    <Url />
                                 </b-tab>
                            </b-tabs>
                       </div>

                    </div>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
import Searchimage from '../components/Searchimage.vue'
import Uploadimage from '../components/Uploadimage.vue'
import Url from '../components/Url.vue'
export default {
    name: "EditImage",
    components: { Searchimage, Uploadimage, Url }
}
</script>
<style lang="scss" scoped>
    .editcover__page {
        &-container {
            &__image {
                background:#F6F6F6;
                border-radius: 20px;
                color:#AFAFAF;
                font-weight: 500;
                font-size: 15px;
                border:1px solid #F6F6F6;
                margin-top: -40px;
                
            }
        }
        .tab{
            position:absolute;
            background: #1B2647;
            width:800px;
            //left:-150px;
            height:500px;
            &-header__item {
                //background:#3E5189;
                
            }
           
        }
        
       
    }
</style>