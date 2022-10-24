<template>
    <div class="search">
        <div class="search_container pt-5 d-flex  justify-content-left align-items-left text-left">
            <form class="search_container__form px-5 py-4 pt-5">
                
                <div class="d-flex p-5">
                    <div class="px-5 py-4">
                        <b-input-group >
                            <b-form-input placeholder="Search"
                              type="search" 
                              class="search_container__input"
                              v-model="search"
                              @input="waitSearch"

                            >
                            </b-form-input>
                        </b-input-group>
                       
                    </div>
                     <div  class="search_container__bg"><img class="" src="@/assets/icons/search_icon.png" height="20px"></div>
                    <div class="pt-4">
                        <a :href="download_url" class="image-download">
                            <b-button 
                                class="search_container__btn"
                                variant="clear"
                                
                            >
                        
                            <span class=""><img src=""> </span>
                            Find Images
                                
                            </b-button>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-unstyled">
                            <li v-for="photo in photos" :key="photo.id">
                                <img class="image-list" height="200" width="200" :src="photo.urls.thumb" alt="img" @click="applyPhoto(photo)" />
                            </li>
                        </ul>        
                    </div>
                    
                </div>
                <div class="search_container__footer d-flex justify-content-center align-items-center text-center pt-5">
                    <div class=" text-center pt-5 mt-5">
                        <span class="pt-5 mt-5"><h6>Images powered by <img class="mx-2" src="@/assets/images/Unsplash_wordmark_logo.png"><img class="mx-2" src="@/assets/images/giphy-logo.png"></h6></span>
                        <span class=""></span>
                    </div>
                </div>
            </form>
            
                                                            
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash'
export default {
    name: 'Search',
    data() {
        return {
            searchKeywords: ['apple', 'love', 'nature', 'water', 'macbook'],
            photos: [],
            search: null,
            photo_url: null,
            download_url: null, 
        }
    },
    created() {
        this.getPhoto()
    },
    computed: {
        backgroundStyle() {
            let style = {}
            if(this.photo_url) {
                style.background = 'no-repeat center/100% url(${thi.photo_url})';
            }else {
                return style
            }
            
        }
    },

    methods: {
        getPhoto() {
            let appid = this.$unsplash._applicationId;
            let keywords = this.searchKeywords;

            let query = keywords[Math.floor(Math.random()*keywords.length)];

            this.$axios.get('https://api.unsplash.com/search/photos?page=1&per_page=10&query=${query}&client_id=${appid}')
            .then(response => {
                this.photos = response.data.results
            })
            .catch(e => {
                console.log(e)
            })
        },

        searchPhoto() {
            let appid = this.$unsplash._applicationId;
            let query = this.search
            this.$axio.get('htpps://api.unsplash.com/search/photos?page=1&per_page=10&query=${query}&client_id=${appid}')
            .then(response => {
                this.photos = response.data.results
            })
            .catch(e => {
                console.log(e)
            })
        },

        getRandom() {
            this.$axios.get('https://source.unsplash.com/random')
            .then(response => {

            })
        },

        applyPhoto(photo) {
            this.photo_url = photo.urls.regular
            this.download_url = photo.links.download + '?force=true'
        },

        waitSearch: _.debounce(
            function() {
                this.searchPhoto();    
            }, 1000)
        



    }
}
</script>
<style lang="scss" scoped>
    .search {
        .search_container{
            &__form{
                //margin-left:60px;
            }
            &__input{
                width:400px;
                box-sizing: border-box;
                border: none;
                
               
                
            }
            &__input::placeholder {
               position:absolute;
               left:45px;
            }
            &__btn{
                background:#EF4873;
                color:#FFFFFF;  
                //font-size: 10px;
                width:120px;
            }
            &__bg{
                //background:#FFFFFF;
                //position:absolute;
                position:absolute;
                left:150px;
                top:220px;
               
            }
            &__footer{
                color:#000000;
                font-size:14px;
                font-weight:500;
                font-family:'Roboto', sans-serif
            }
            
        }
        active-nav-item-class{
            margin-left:100px;
            color:red;
        }
        .tab__search{
            margin-left:-17px;
            top:0px;
            background:#EF4873;
        }

    }
</style>