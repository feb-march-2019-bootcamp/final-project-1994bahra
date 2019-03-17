<template>
  <div class="row" >
      
   <div class="card text-white bg-info mb-3" style="max-width: 25rem;">
  <div class="card-header">About Me</div>
  <div class="card-body">
    <h4 class="card-title"></h4>
    <p class="card-text">My name is Bahra Ibrahim Rahman. I'm 25 Years old and I'm a software engineer.I'm Kurdish and live in Hawler.I participant the web development course because it 's my favorite field ,finally i create this simple personal website....</p>
    <div class="card-footer"></div>
  </div>
</div>

    
  </div>
</template>
<script>
import { state } from '../app-state.js'
export default {
    name: 'aboutMe',
  
  methods:{
      created() {
    if (!this.me) {
      this.$router.push('/');
    }
      }
  } 
}
</script>
<style scoped>
.row{
margin-top: 6rem;
margin-left: 27rem;
font-size: 1rem;
-webkit-box-align: center;
}
</style>

