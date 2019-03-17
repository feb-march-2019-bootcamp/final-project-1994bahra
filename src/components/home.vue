<template>
  <div class="container">
  <img src="bg.jpg" alt="home image" style="width:122%;  ">
  <div class="text-block">
    <h3>Hello....</h3>
    <h4>Welcome to my First Website.</h4>
  </div>
  </div>
  
</template>
<script>
import { state, setUser } from '../app-state.js'
export default {
  data: () => ({
    me: '',
  }),
  methods: {
    home() {
      if (!this.me) return;
      setUser(this.me);
      this.$router.push({path: '/about'})
    }
  }
}
</script>
<style scoped>


.container {
  position:fixed;
   width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;

}

.text-block {
  position: absolute;
  bottom: 400px;
  right: 500px;
  color: black;
  
}
</style>
