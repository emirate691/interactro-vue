
<template>
<div>
   <label class="toggle-switch">
      <input type="checkbox" :checked="isToggled" v-on:change="setToggle()" />
      <span class="switch" > OFF<span style="padding-left:11px"></span> ON</span>
      
 
    </label>
</div>
    
</template>


<script>
export default {
  props:['isToggled'],
  data: () => ({
       
  }),
  methods: {
    setToggle(){
      this.isToggled = !this.isToggled
    }
  }
}
</script>

<style scoped>
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 25px;
    top:-25px;
    right:-210px;
  }
  .switch{
    color:black;
    padding-top: 4px;
    font-size: 10px;
    font-weight:200;
    text-align: center;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: #d1d2d4;
    border-radius: 6px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: -5px;
    top: -1px;
    right:-12px;
    width: 18px;
    height: 23px;
    background-color: #eeeef0;
    border-radius: 15%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(40px);
    background-color: #FFFFFF;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #dbdcdd;
  }
</style>
