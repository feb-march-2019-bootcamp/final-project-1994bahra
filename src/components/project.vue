<template>
<div>
  <br>
    <h2 id='header'>There are my projects</h2>
    <br>
    <br>
  <table  class="table table-bordered table-hover ">
  
  <tbody>
    <tr class="">
      
      <td><div class="col-md-4"> <img src="p1.png"  width="350" height="200"><br>
    <a href="https://naughty-kare-8e36fb.netlify.com/" class="btn btn-success" role="button">Project 1</a>
</div></td>
      <td><div class="col-md-4"> <img src="p2.png"  width="350" height="200"><br>
    <a href="https://nifty-noyce-62caff.netlify.com/" class="btn btn-success" role="button">Project 2</a>
</div></td>
      <td><div class="col-md-4"> <img src="p3.png"  width="350" height="200"><br>
    <a href="https://raw.githubusercontent.com/feb-march-2019-bootcamp/project-3-1994bahra/master/p.js" class="btn btn-success" role="button">Project 3</a>
</div></td>
    </tr>
    <tr>
     
      <td><div class="col-md-4"> <img src="p4.png"  width="350" height="200"><br>
    <a href="https://sharp-meninsky-de4327.netlify.com/indexx.html" class="btn btn-success" role="button">Project 4</a>
</div></td>
      <td><div class="col-md-4"> <img src="p5.png"  width="350" height="200"><br>
    <a href="https://optimistic-cori-9f9022.netlify.com/" role="button">Project 5</a>
</div></td>
      <td><div class="col-md-4"> <img src="p6.png"  width="350" height="200"><br>
    <a href="https://github.com/feb-march-2019-bootcamp/project-6-1994bahra" class="btn btn-success" role="button">Project 6</a>
</div></td>
    </tr>
    <br>
<br>
<br>
<br>
  </tbody>
</table> 
  </div>
</template>

<script>
import { state } from '../app-state.js'
export default {
    name: 'project',
  
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

</style>

