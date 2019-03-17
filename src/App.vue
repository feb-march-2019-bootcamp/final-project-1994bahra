<template>
<div id="app">
  

<div class="card text-center">
  <div class="card-header navbar-dark bg-info "  style='top:0px; height:4rem; font-weight:bold; '>
    <ul class="nav nav-tabs  card-header-tabs">
      <li class="nav-item">
         <router-link :to="{path: '/', query: {id: 'home'}}" class="nav-link">
              Home
            </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">
              About
            </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/education" class="nav-link">
              Education
            </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/project" class="nav-link">
              Project
            </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link">
              Contact
            </router-link>
      </li>
    </ul>
  </div>
</div>
<router-view></router-view>
<!-- Footer -->
<footer class="bg-dark "> 
  <div class="text-center">
    <ul class="list-unstyled list-inline">
      <li class="list-inline-item"><a href="https://www.facebook.com/bahraiiii" class="btn btn-dark " role="button"><i class="fab fa-facebook fa-2x"> </i></a></li>
      <li class="list-inline-item"><a href="https://github.com/1994bahra" class="btn btn-dark" role="button"><i class="fab fa-github fa-2x" > </i></a></li>
      <li class="list-inline-item"><a href="https://www.instagram.com/bahra94_/" class="btn btn-dark" role="button"><i class="fab fa-instagram fa-2x"> </i></a></li>
      <li class="list-inline-item"><a href="https://m.me/bahraiiii" class="btn btn-dark" role="button"><i class="fab fa-facebook-messenger fa-2x" > </i></a></li>
      
    </ul>
  </div>
  
</footer>

</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 import 'bootstrap/dist/css/bootstrap.css';
 import home from './components/home.vue';
 import { state, setUser } from './app-state'
//  import about from './components/about.vue';
//  import education from './components/education.vue';
//  import project from './components/project.vue';
//  import contact from './components/contact.vue';


export default {
  
  name: 'app',
  components: {
    home
  },
  computed: {
    me: () => state.me
  },
  methods: {
    x() {
      
      this.$router.push('/');
    }
  }
    
}
</script>

<style>
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  margin-top: 0px;
  /* background:rgba(233, 30, 99, 0.1); */
  font-size: 1.1rem;
}
body{
  background: rgba(158, 158, 158, 0.3) ;
  color: rgb(233, 210, 210);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: normal;
  
}

  footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color:#fff;
  height: 60px;


}

  

</style>
