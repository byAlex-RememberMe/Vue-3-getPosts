<template>
  <div class="app">
    <h1>Новости</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..." />
    <div class="btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createNewPost"></post-form>
    </my-dialog>
    <post-list
      v-if="!isPostsLoading"
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
    ></post-list>
    <my-spinner v-else></my-spinner>
    <div ref="observer" class="observer"></div>
    <!-- <div class="page__wrapper">
      <button 
        class="page__number"
        :class="{'current__page':page===pageNumber}" 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        @click="changePage(pageNumber)"
      >
        {{pageNumber}}
      </button>
    </div> -->
  </div>
</template>

<script>
import PostForm from "./componenst/PostForm.vue";
import PostList from "./componenst/PostList.vue";
import MyButton from "./componenst/UI/MyButton.vue";
import MyDialog from "./componenst/UI/MyDialog.vue";
import MySpinner from "./componenst/UI/MySpinner.vue";
import MySelect from "./componenst/UI/MySelect.vue";
import axios from "axios";
import MyInput from "./componenst/UI/MyInput.vue";

export default {
  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  mounted() {
    this.getPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages){
        this.loadMorePages()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  methods: {
    createNewPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber){
    //   this.page = pageNumber
    // },
    async getPosts() {
      this.isPostsLoading = true;
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 700);
      } catch (e) {
        alert("Ошибка: " + e);
      } finally {
        // this.isPostsLoading = false
      }
    },
    async loadMorePages() {
      this.page += 1
      try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Ошибка: " + e);
      } 
    },
  },
  watch: {
    // page(){
    //   this.getPosts()
    // }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton,
    MySpinner,
    MySelect,
    MyInput,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  max-width: 1000px;
  margin: 0 auto;
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/email-pattern.png");
}
.app {
  padding: 0 50px;
}
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
/* .page__wrapper{
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  width: 204px;
  margin: 0 auto;
  opacity: .2;
  transition: .5s ease-in;
}
.page__number{
  padding: 1px 4px;
  margin: 5px 2px 10px 0;
  color: teal;
  border: 2px solid teal;
  border-radius: 8px;
  text-align: center;
}
.page__number:hover{
  transform: scale(1.1);
  color: black;
}
.page__wrapper:hover{
  opacity: .9;
}
.page__number.current__page{
  font-weight: 900;
  color: black;
  border-left: 3px solid #900;
} */
.observer {
  height: 30px;
}
</style>