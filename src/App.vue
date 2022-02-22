

<template>
  <div>
    <Form />


    <select name="" id=""  @change="filterPostsNum">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="50">50</option>
    
    </select>
    <div v-if="loading">Loading...</div>

    <ul>
      <li v-for="post in allposts.data" :key="post.id" >
        {{post.text}}
        <button style="color:red;" @click="remove(post.id)">remove</button>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import Form from "./components/Form.vue";

export default {
  components:{
    Form
  },
  data(){
    return {
      name:'hi',
    }
  },
  methods:{
    removePost: (id)=>{
      this.remove(id);
    },
    
    ...mapActions(['fetchPost','remove',"filterPostsNum"])
  },
  created(){
    this.fetchPost()
  },
  computed: mapGetters(['allposts','loading'])
}

</script>