<template>
  <v-card
    class="my-12"
    max-width="374"
    min-height="360"
    loading
    shaped=true
  >
  <v-avatar
  color="primary"
  size="56"
  style="margin: 10px;"
  >

      <img
            alt="Avatar"
            :src="post.owner.picture"
                  >
  </v-avatar>
    <v-card-title v-text="ownerDetail"></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4" v-text="post.likes">
          
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1" v-text="post.publishDate">
        
      </div>

      <div v-text="post.text"></div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tags</v-card-title>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="tag in post.tags" :key="tag" v-text="tag"></v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  props:['post'],
  data(){
    return {
      data:{}
    }
  },
  created(){
    this.data=this.post;
  },
  computed:{
    ownerDetail : function() {
      return this.post.owner.firstName + " " + this.post.owner.lastName;
    }
  }
}


</script>