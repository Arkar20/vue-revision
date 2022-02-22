import { createApp } from 'vue'
import { createStore } from 'vuex'
import posts from "./modules/todos"

const store = createStore({
  modules: {
    posts
  }
})

export default store;