

<template>
  <div>
    <Form />


    <select name="" id="" style="display: block;"  @change="filterPostsNum">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="50">50</option>
    
    </select>

          

      

    <div v-if="loading" style="display:grid;place-items:center;">
        <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
    </div>

    <ul>
      <!-- <li  :style="style(post)"> -->
        <!-- {{post.text}}
        <button style="color:red;" @click="remove(post.id)">remove</button>
        <button style="color:red;" @click="update(post.id)">update</button> -->
      <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col
              v-for="post in allposts.data" 
              :key="post.id"
              cols="12"
              sm="4"
            >
                <SinglePost :post="post"/>
            </v-col>
        </v-row>
      </v-container>

      <!-- </li> -->
    </ul>

  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import Form from "./components/Form.vue";
import SinglePost from './components/SinglePost.vue'
export default {
  components:{
    Form,SinglePost
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