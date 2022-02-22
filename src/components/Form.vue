<template>
  <div>
    <input type="text" v-model="text">
    <button @click="addNewPost">Submit</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default{
  name:"Form",
  data(){
    return{
      text:""
    }
  },
  methods:{
    addNewPost(){
      // console.log(this.text)
      this.addPost(this.text);
    },
    ...mapActions(['addPost'])}
}
</script>