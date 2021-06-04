/**
 * App logic for Posts
 * actions can use async methods
 * mutations can use sync methods
 * state changes through mutations (mutations - changes state)
 * apply mutation through context (ctx.commit()) in actions
 */

export default {
  actions: {
    async fetchPosts(ctx, limit = 10) {
      const res = await fetch(
        `https://json-server-posts.herokuapp.com/posts?_limit=${limit}`
      );
      const posts = await res.json();

      ctx.commit("updatePosts", posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    validPost(state) {
      return state.posts.filter((post) => post.title && post.body);
    },
    allPosts(state) {
      console.log(`All posts state:`);
      console.log(state.posts);
      return state.posts;
    },
    postsCount(state, getters) {
      console.log(`Valid posts count: ${getters.validPost.length}`);
      return getters.validPost.length;
    },
  },
};
