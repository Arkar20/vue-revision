const state = {
  posts: {},
  loading:false
}

const getters = {
  allposts: state => state.posts,
  loading:state=>state.loading
}

const actions = {

  fetchPost: async ({ commit }) => {
    
    commit('toggelLoading');


    fetch('https://dummyapi.io/data/v1/post', {
      headers: {
        "app-id": "62149ac830c66fd698ee451e"
      }
    }).then(res => res.json())
      .then(result => commit('setPosts', result))
      .catch(err => console.log(err))
      .finally(()=>commit("toggelLoading"))
  },
  addPost ({ commit }, text)  {
    // console.log(text)
    commit('addPost', text);
  },
  remove ({ commit },id)  {
    commit('removePost',id)
  },
  filterPostsNum({ commit }, e) {
    
    commit("remoteAll");
  
    fetch(`https://dummyapi.io/data/v1/post?limit=${e.target.value}`, {
      headers: {
        "app-id": "62149ac830c66fd698ee451e"
      }
    }).then(res => res.json())
      .then(result => commit('setPosts', result))
      .catch(err => console.log(err))
    .finally(()=>commit("toggelLoading"))
  }


};

const mutations = {
  setPosts: (state, result) => {
    state.posts=result
  },
  addPost: (state, text) => {
    state.posts = {
      ...state.posts,
      data:[...state.posts.data,{id:state.posts.data.length+1,text}]
    }
  },
  removePost: (state, id) => {
    state.posts = {
      ...state.posts,
      data:state.posts.data.filter(post=>post.id!==id)
    }
  },
  remoteAll: (state) => {
    state.posts = {},
    state.loading = !state.loading
  },
  toggelLoading: (state) => state.loading = !state.loading

};


export default {
  state,getters,actions,mutations
}