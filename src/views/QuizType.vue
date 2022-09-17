<template>
  <div class="engagement-page h-100">
    <div class="engagement-page_header">
        <Header />
    </div>
    <div class="p-5 m-5">
    <div class=" engagement-page_details d-flex justify-content-center align-item-center">
      <div class="">
      <h3 class="font-weight-bolder mx-3">What type of quiz would you like to create?</h3>
      <p class="text-center change">You can change quiz type at any time.</p>
      </div>
    </div>
    <div class="engagement-page_card d-flex justify-content-left  m-5 p-2">
      <b-row class="">
        <b-col class="col-sm-12 col-lg-4 col-md-4 p-3 justity-content-center align-items-center text-center">
          <div class="engagement-page_card_1">
            <div class="engagement-page_card_1-image">
              <img class="mx-5 my-5" src="@/assets/headers/Assesments.png" /> 
              <!--img class="engagement-page_card_1-image_troph-bg m-4 p-3 position-relative" src="@/assets/headers/trophy_bg.png"/-->
            </div>
              <h4 class="assesment">
                  Assesments
              </h4>
              <p class="assesment">Test knowledge in fun ways. </p>
              <p class="assesments mx-4">Each quiz question will have one correct answer.</p>
              <p class="assesment mx-5 pb-5 pt-3">Example: How much do you actually know about the world cup?</p>
          </div>

          
          </b-col>
            <b-col class="col-sm-12 col-lg-4 col-md-4 p-3 justity-content-center align-items-center text-center">
                <div class="engagement-page_card_2">
                    <div class="engagement-page_card_2-image ">
                        <img class=" polls-bg mx-5 my-5" src="@/assets/headers/personality_icon.png" />
                    </div>
                    <h4>Personality</h4>
                    <p class="mx-5">Test knowledge in fun ways. </p>
                    <p class="personality mx-4">Each quiz question will have one correct answer.</p>
                    <p class="mx-5 pb-5 pt-3">Example: How much do you actually know about the world cup?</p>
                </div>

            </b-col>
            <b-col class="d-flex-block col-sm-12 col-lg-4 col-1 md-4 p-3 justity-content-center align-items-center text-center w-100">
                <div class="engagement-page_card_2">
                    <div class="engagement-page_card_1-image">
                        <img class="mx-5 my-5" src="@/assets/headers/rating.png" />
                    
                    </div>
                    <div class="">
                        <h4>Scored</h4>
                        <p class="mx-5"> Test knowledge in fun ways. </p>
                        <p class="score mx-4">Each quiz question will have one correct answer.</p>
                        <p class="mx-5 pb-5  pt-3">Example: How much do you actually know about the world cup?</p>
                    </div>
                </div>

            </b-col>
            
        </b-row>
        
      </div>
    </div>
    <div>
      <div class="">
        <Pollsidebar/>
      </div>
      
      <Polleditor />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Polleditor from '../views/Polleditor.vue'
import Pollsidebar from '../components/Pollsidebar.vue'

export default {
    name:"EngagementType",
    components:{ Header, Polleditor,Pollsidebar },
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
        background:#EF4873;
        box-shadow: 0px 22px 50px 6px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width:350px;
        &-image{
          
        }
      }
      &_card_2{
        background:#FFFFFF;
        box-shadow: 0px 22px 50px 6px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
       width:350px;
      }
      
    p{
      font-size: 13px;
    }
    .change{
        font-size: 20px;
    }
    .assesment{
        color:#FFFFFF;
    }
    .assesments{
      position:absolute ;
      bottom:120px;
      color:#FFFFFF
    }
    .personality{
      position:absolute;
      bottom:120px;

    }
    .score{
      position:absolute;
      bottom:120px;

    }

  }
</style>