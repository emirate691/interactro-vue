<template>
    <div class="result_page p-5">

        <div class="result_page__header justify-content-center align-item-center text-center">
            <h5 class="text-center">YOU GOT X OUT OF 1 CORRECT</h5>
        </div>
        <div class="result_page__title">
            <h4 class="text-center font-weight pt-3 pb-2">RESULT 1</h4>
        </div>
        
        <div class=" show__question justify-content-center align-items-center text-center" id="app">
            <b-button
                variant="clear"
                class="show__question__image text-center position-absolute"
                v-on:click="isHidden = !isHidden"
            
            >
            
                <template v-if="isHidden"><img src="@/assets/sidebars/hide.png"><span class="">HIDE QUESTION IMAGE </span>
                     <span class=""><button class="show__question__image">EDIT</button> </span>
                </template>
                
                <template v-else><img src="@/assets/sidebars/Preview.png"><span class="mx-1">SHOW QUESTION IMAGE</span>
                   
                    </template>
                    

            </b-button>
            <div class="pt-5 mt-5 show_image_question" v-if="isHidden">
                <div class="result__image-frame ">
                <img src="@/assets/sidebars/Image.png" class="mb-5 mt-5">
                </div>
           
            </div>      

            <div class="mt-3">
            <input 
                placeholder="Type description here"
                class="input_description"
            />
            <div class="info__1 position-absolute" id="tooltip-button-show-event">
                <img src="@/assets/images/info (1).png">
            </div>
            <div class="info__2 position-absolute" id="tooltip-button-show-event">
                <img src="@/assets/images/info (1).png">
            </div>
        
        </div>
        <div class="mt-5">
            <Calltoaction />
            
        </div>

        
       
    

    </div>
    </div>
</template>
<script>
import Calltoaction from '../components/Calltoaction.vue'
export default {
    name:'Action',
    components: { Calltoaction },
     data () {
      return {
        isHidden: true,
      }
     }  
      
}
</script>
<style lang="scss" scoped>
    .result_page{
        &__header{
            color:#2B2B2B;
            font-family:'Roboto';
            font-style: normal;
            font-weight: 500;
        }
        &__title{
            background:#F6F6F6;
        }
        .show__question{
            margin-top:60px;
    
            border-top:0.5px dashed #C4C4C4;
        &__image{
            background:#FFCAD8;
            border-radius: 20px;
            border:1px solid #FFCAD8;
            color:#3D3D3D;
            font-weight: 500;
            font-size: 10px;
            width:20%;
            top:222px;
            left:400px;
        }
        .result__image-frame{
    
            background: #D9D9D9;
            color: dimgray;
            padding: 10px 10px;
            margin-top:-50px;
            min-height: 250px; 
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
        .info__1{
            top:130px;
            right:0px;  
        }
        .info__2{
            right:10px;
            bottom:160px;
        }
        
        
    }
    
    }
</style>