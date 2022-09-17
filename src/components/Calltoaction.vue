 <template>
    <div>
        <div class="show__call_action justify-content-center align-items-center text-center">
            <b-button
                variant="clear"
                class="show__call_action_btn text-center position-absolute"
                v-on:click="isHidden = !isHidden"
            >
                <template v-if="isHidden"><img src="@/assets/sidebars/hide.png"><span class="">HIDE QUESTION IMAGE </span>
                        <span class=""><button class="show__call_action_btn">URL</button> </span>
                    </template>
                    
                    <template v-else><img src="@/assets/sidebars/Preview.png"><span class="mx-1">SHOW QUESTION IMAGE</span>
                    
                    </template>
            </b-button>
            <div class="mt-5 pt-5" v-if="isHidden">
                <b-form-group class="justify-content-center align-item-center">
                    <b-form-input
                        to="/"
                        variant="clear"
                        class="take_quiz text-center"
                        placeholder="Call To Action"
                        
                    >
                    </b-form-input>
                    
                </b-form-group>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            isHidden: true,
        }
    }
}
</script>
<style lang="scss" scoped>
    .show__call_action{ 
        
        &_btn{
            background:#FFCAD8;
            border-radius: 20px;
            border:1px solid #FFCAD8;
            color:#3D3D3D;
            font-weight: 500;
            font-size: 10px;
            width:20%;
            bottom:72px;
            left:400px;
        }
         .take_quiz{
            position: relative;
            background:#EF4873; 
            border-radius: 10px;
            color:#FFFFFF;
            width:20%;
            left:320px;
           
        }
        .take_quiz::placeholder{
            color: #FFFFFF;
        }
        
    }    
</style>