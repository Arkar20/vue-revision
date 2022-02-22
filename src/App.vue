

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
      <li v-for="post in allposts.data" :key="post.id" :style="style(post)">
        {{post.text}}
        <button style="color:red;" @click="remove(post.id)">remove</button>
        <button style="color:red;" @click="update(post.id)">update</button>
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
    style: (post)=>{
        return post.cancel && 'text-decoration: line-through;'
    },
    
    
    ...mapActions(['fetchPost','remove',"filterPostsNum",'update'])
  },
  created(){
    this.fetchPost()
  },
  computed: {
    
    ...mapGetters(['allposts','loading'])}
}

</script>