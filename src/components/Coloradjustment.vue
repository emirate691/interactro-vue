<template>
    <div class="profile">
        <div class="contentAdjustment-text py-2">Color Adjustments</div>
         
        <div class ="contentAdjustment-main p-2 pb-4 d-flex justify-content-between flex-wrap">
            
                <div v-on:click="handleColorControls('dark_contrast')" class="contentAdjustment-main-smallcontent d-flex flex-column  align-items-center justify-content-between bg-danger border-bottom p-3">
                        <img class="contentAdjustment-main-smallcontent-image" src=""  alt="">
                        <div class="contentAdjustment-main-smallcontent-text mt-4">Dark contrast</div>
                </div>
                <div v-on:click="handleColorControls('light_contrast')" class="contentAdjustment-main-smallcontent d-flex flex-column  align-items-center justify-content-between bg-danger border-bottom p-3">
                        <img class="contentAdjustment-main-smallcontent-image" src=""  alt="">
                        <div class="contentAdjustment-main-smallcontent-text mt-4">Light contrast</div>
                </div>
                <div v-on:click="handleColorControls('monochrome')" class="contentAdjustment-main-smallcontent d-flex flex-column  align-items-center justify-content-between bg-danger border-bottom p-3">
                        <img class="contentAdjustment-main-smallcontent-image" src=""  alt="">
                        <div class="contentAdjustment-main-smallcontent-text mt-4">Monochrome</div>
                </div>
                <div v-on:click="handleColorControls('high_saturation')" class="contentAdjustment-main-smallcontent d-flex flex-column mt-2 align-items-center justify-content-between bg-danger border-bottom p-3">
                        <img class="contentAdjustment-main-smallcontent-image" src=""  alt="">
                        <div class="contentAdjustment-main-smallcontent-text mt-4">High Saturation</div>
                </div>
                <div  class="contentAdjustment-main-bigcontent px-2 d-flex mt-2 flex-column py-2 align-items-center justify-content-center border-bottom py-0">
                    <div class="py-0">
                        
                        <span class="contentAdjustment-main-bigcontent-text">Adjust Text colors</span>
                    </div>
                    <div class="contentAdjustment-main-bigcontent-bar mt-4 p-1 w-100 d-flex justify-content-between align-items-center">
                        <div v-on:click="handleTextColor('#0076B4')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#0076B4"></div>
                        <div v-on:click="handleTextColor('#EA86FB')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#EA86FB"></div>
                        <div v-on:click="handleTextColor('#4360F1')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#4360F1"></div>
                        <div v-on:click="handleTextColor('#7A549C')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#7A549C"></div>
                        <div v-on:click="handleTextColor('#C83733')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#C83733"></div>
                        <div v-on:click="handleTextColor('#D07021')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#D07021"></div>
                        <div v-on:click="handleTextColor('#26999F')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#26999F"></div>
                        <div v-on:click="handleTextColor('#4D7831')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#4D7831"></div>
                        <div v-on:click="handleTextColor('#FFFFFF')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#FFFFFF"></div>
                        <div v-on:click="handleTextColor('#000000')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#000000"></div>
                    </div>
                </div>
                <div v-on:click="handleColorControls('high_contrast')" class="contentAdjustment-main-smallcontent d-flex flex-column mt-2 align-items-center justify-content-between bg-danger border-bottom p-3">
                        <img class="contentAdjustment-main-smallcontent-image" src=""  alt="">
                        <div class="contentAdjustment-main-smallcontent-text mt-4">High contrast</div>
                </div>
                <div class="contentAdjustment-main-bigcontent px-2 d-flex mt-2 flex-column py-2 align-items-center justify-content-center border-bottom py-0">
                    <div class="py-0">
                        
                        <span class="contentAdjustment-main-bigcontent-text">Adjust Title colors</span>
                    </div>
                    <div class="contentAdjustment-main-bigcontent-bar mt-4 p-1 w-100 d-flex justify-content-between align-items-center">
                        <div v-on:click="handleTitleColor('#0076B4')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#0076B4"></div>
                        <div v-on:click="handleTitleColor('#EA86FB')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#EA86FB"></div>
                        <div v-on:click="handleTitleColor('#4360F1')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#4360F1"></div>
                        <div v-on:click="handleTitleColor('#7A549C')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#7A549C"></div>
                        <div v-on:click="handleTitleColor('#C83733')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#C83733"></div>
                        <div v-on:click="handleTitleColor('#D07021')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#D07021"></div>
                        <div v-on:click="handleTitleColor('#26999F')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#26999F"></div>
                        <div v-on:click="handleTitleColor('#4D7831')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#4D7831"></div>
                        <div v-on:click="handleTitleColor('#FFFFFF')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#FFFFFF"></div>
                        <div v-on:click="handleTitleColor('#000000')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#000000"></div>
                    </div>
                </div>
                <div v-on:click="handleColorControls('low_saturation')" class="contentAdjustment-main-smallcontent d-flex flex-column mt-2 align-items-center justify-content-between bg-danger border-bottom p-3">
                        <img class="contentAdjustment-main-smallcontent-image" src=""  alt="">
                        <div class="contentAdjustment-main-smallcontent-text mt-4">Low saturation</div>
                </div>
                <div class="contentAdjustment-main-bigcontent px-2 d-flex mt-2 flex-column py-2 align-items-center justify-content-center border-bottom py-0">
                    <div class="py-0">
                        
                        <span class="contentAdjustment-main-bigcontent-text">Adjust Background colors</span>
                    </div>
                    <div class="contentAdjustment-main-bigcontent-bar mt-4 p-1 w-100 d-flex justify-content-between align-items-center">
                        <div v-on:click="handleBackgroundColor('#0076B4')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#0076B4"></div>
                        <div v-on:click="handleBackgroundColor('#EA86FB')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#EA86FB"></div>
                        <div v-on:click="handleBackgroundColor('#4360F1')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#4360F1"></div>
                        <div v-on:click="handleBackgroundColor('#7A549C')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#7A549C"></div>
                        <div v-on:click="handleBackgroundColor('#C83733')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#C83733"></div>
                        <div v-on:click="handleBackgroundColor('#D07021')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#D07021"></div>
                        <div v-on:click="handleBackgroundColor('#26999F')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#26999F"></div>
                        <div v-on:click="handleBackgroundColor('#4D7831')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#4D7831"></div>
                        <div v-on:click="handleBackgroundColor('#FFFFFF')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#FFFFFF"></div>
                        <div v-on:click="handleBackgroundColor('#000000')" class="contentAdjustment-main-bigcontent-bar-colors ml-1" style="background-color:#000000"></div>
                    </div>
                </div>
                
               
                
                
        </div>
    </div>
</template>

<script>
export default {
    data: ()=>({
     colorControls:{
        dark_contrast: false,
        light_contrast: false,
        monochrome: false,
        high_saturation: false,
        high_contrast: false,
        low_saturation: false,
        adjust_text_color: '#ffffff',
        adjust_title_color: '#ffffff',
        adjust_background_color: '#ffffff',

     }   
    }),
    methods:{
        handleColorControls(colorControl){
            this.colorControls[colorControl] = !this.colorControls[colorControl]
            console.log(colorControl,this.colorControls[colorControl])
        },
        handleTextColor(text_color){
            this.colorControls.adjust_text_color = text_color;
            console.log('text color', text_color)
        },
        handleTitleColor(title_color){
            this.colorControls.adjust_title_color = title_color;
            console.log('title color', title_color)
        },
        handleBackgroundColor(background_color){
            this.colorControls.adjust_background_color = background_color;
            console.log('background color', background_color)
        }
    }
}
</script>



<style lang="scss" scoped>

.contentAdjustment{
    background-color: #FFFFFF;
    &-text{
        font-weight: 600;
    }
    &-main{
        width:100%;
        background-color: #FFFFFF;
        border: 1px solid yellow;
        border-radius: 8px;
        &-bigcontent{
            background-color: lightgreen;
            font-size: 14px;
            width: 66%;
            border-radius:6%;
            &-bar{
                border-radius:8px;
                &-colors{
                    height: 20px;
                    width:30px;
                    border-radius:15%;
                }
                &-text{
                    font-size: 15px;
                }
            }
            &-text{
                font-size: 15px;
            }
        }
        &-smallcontent{
            width: 32%;
            border-radius:5%;
            background-color: red;
            cursor:pointer;
            &-image{
                height:40px;
                width:40px;
            }
            &-text{
                font-size: 13px; 
            }

        }
    }
}

</style>