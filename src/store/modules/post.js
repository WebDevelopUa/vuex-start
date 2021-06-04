/**
 * App logic for Posts
 * actions can use async methods
 * mutations can use sync methods
 * state changes through mutations (mutations - changes state)
 * apply mutation through context (ctx.commit()) in actions
 */

export default {
  actions: {
    async fetchPosts(ctx) {
      const res = await fetch("https://stream-json-server.herokuapp.com/posts");
      const posts = await res.json();

      ctx.commit("updatePosts", posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      console.log(`All posts state:`);
      console.log(state.posts);
      return state.posts;
    },
  },
};
