<template>
<div class='row'>
  <div class="card text-dark border-secondary mb-3" style="max-width: 70rem;" >
  <div class="card-header bg-secondary"><h3>Contact Me</h3></div>
  <div class="card-body">
   
      <form  name="contact" @submit.prevent="submit()" action="/" method="POST" data-netlify="true"  >
    <input type="hidden" name="form-name" value="contact">
    <div class="form-group">
     <label> Your Name:</label><input type="text" name="name" v-model="name" id="name" class="form-control">
    <label> Your Email:</label><input type="email" name="email" v-model="email" id="email" class="form-control">
     <label> Your Message:</label><textarea name="message" v-model="message" id cols="20" rows="5" class="form-control" style="max-height: 6rem;"></textarea>
      <div class="card-footer"><button type="submit" class="btn btn-success ">Submit</button>
 </div>
    </div>
  </form>
 </div>

</div>
</div>
</template>
<script>
import Axios from "axios";
export default {
  data: () => ({
    name: "",
    message: "",
    email:""
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submit() {
      Axios.post(
        "/",
      
          {
          "form-name": "contact",
          name: this.name,
          message: this.message,
          email:this.email
        }
        
        
      )
        .then(() => {
          alert("success");
        })
        .catch(e => {
          console.log(e);
          alert("error");
        });
    }
  }
};
</script>
<style scoped>

.row{
margin-top: 3rem;
margin-left: 30rem;
font-size: 1rem;
-webkit-box-align: center;
font-weight: bold;
}
</style>
