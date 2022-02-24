<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
            <v-text-field
                  color="success"
                  v-model="text"
                  :counter="10"
                  label="Share Your Thoughts"
                  required
                  :light="true"
                  success
                  hint="My Todo Task"
              
                ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
        
                  <!-- <v-select
                        :items="['10','20','30','50']"
                        label="Filter"
                      ></v-select> -->
        </v-col>
        <v-col cols="12" md="4">
            <v-btn color="primary" @click="addNewPost">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
    
    
</template>

<script>
import {mapActions} from "vuex";

export default{
  name:"Form",
  data(){
    return{
      text:"",
      filter:"",
      itemsitems:['10','20','30','50'],
      
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