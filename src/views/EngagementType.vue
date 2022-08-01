<template>
  <div class="engagement-page h-100">
      <div class="engagement-page_header">
        <Header />
      </div>
      <div class="p-5 m-5">
        <div class=" engagement-page_details d-flex justify-content-center align-item-center">
          <div class="">
            <h3 class="font-weight-bolder mx-3">Choose Engagement Type</h3>
            <p class="">Make Your Own Interactive Media Now</p>
          </div>
        </div>
        <div class=" engagement-page_card d-flex justify-content-left  m-5 p-2">
          <b-row class="p-3 mx-auto">
            <b-col class="col-sm-12 col-lg-4 col-md-4 p-3">
              <div class="engagement-page_card_1 m-2">
                <div class="engagement-page_card_1-image">
                
                  <img class="m-5 p-4 engagement-page_card_1-image-trophy-bg" src="@/assets/headers/trophy.png" /> 
                  <!--img class="engagement-page_card_1-image_troph-bg m-4 p-3 position-relative" src="@/assets/headers/trophy_bg.png"/-->
                </div>
                <div class="engagement-page_card_quiz justify-content-center align-items-center text-center p-0 m-0">
                      
                  <h6 class="pb-5">Quizes</h6>
                  
                </div>
              </div>

            
            </b-col>
            <b-col class="col-sm-12 col-lg-4 col-md-4 p-3">
              <div class="engagement-page_card_2 m-2">
                <div class="engagement-page_card_2-image">
                  <img class=" engagement-page_card_2-image-polls-bg m-5 p-4" src="@/assets/headers/polls.png" />
                </div>
                <div class=" engagement-page_card_polls justify-content-center align-items-center text-center">
                   <h6 class="pb-5"> polls</h6>
                </div>
              </div>

            </b-col>
            <b-col class="d-flex-block col-sm-12 col-lg-4 col-1 md-4 p-3">
              <div class="engagement-page_card_2 m-2" col-sm="12">
                <div class="engagement-page_card_1-image">
                  <img class="m-5 p-4" src="@/assets/headers/gift-box 1.png" />
                </div>
                <div class=" engagement-page_card_giveways justify-contentent-center align-items-center text-center font-weight-bolder ">
                   <h6 class="font-weight-bolder pb-5">Giveaways</h6>
                </div>
              </div>

            </b-col>
              
          </b-row>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name:"EngagementType",
    components:{ Header },
}
</script>
 
<style lang="scss" scoped>

  .engagement-page{
    background: #F6F6F6;
    &_card{
      &_quiz{
        position: relative;
        color:#F6F6F6;
        margin-top:-50px;
        
      }
      &_polls{
        color:#3D3D3D;
      }
      &_giveaways{
        color:#000000;
        
      }

    }
      &_card_1{
        background:#313F68;
        box-shadow: 0px 22px 53px 6px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width:200px;
        &-image{
          &-trophy-bg{
            background-image: url('../assets/headers/trophy_bg.png');
            background-repeat: no-repeat;
          }
          
        }
      }
      &_card_2{
        background:#FFFFFF;
        box-shadow: 0px 22px 53px 6px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width:200px;
        &-image{
          &-polls-bg{
             background-image: url('../assets/headers/polls_bg.png');
             background-repeat: no-repeat;
          }
      }
      }
      
      
    p{
      font-size: 22px;
    }

 }
</style>