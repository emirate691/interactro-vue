<template>
<div>
   <label class="toggle-switch">
      <input type="checkbox" />
      <span class="switch" v-b-toggle.collapse-2> OFF <span style="padding-left:11px"></span> ON</span>

    </label>
    <b-collapse id="collapse-2">
      <span class="enable_lead mx-5">ENABLE LEAD GENERATION</span>
    </b-collapse>
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
    width: 60px;
    height: 25px;
    top:-20px;
    left:200px;
  }
  .switch{
    color:black;
    padding-top: 7px;
    font-size: 10px;
    font-weight:300;
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
    left: 1px;
    top: 1px;
    width: 23px;
    height: 23px;
    background-color: #eeeef0;
    border-radius: 15%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(35px);
    background-color: #313F68
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #dbdcdd;
  }
  .enable_lead{
    position:relative;
    top:-20px;
    color:#D9D9D9;
    font-family: "Roboto, sans-serif";
    font-weight:500;
    font-size:12px;

  }
</style>
