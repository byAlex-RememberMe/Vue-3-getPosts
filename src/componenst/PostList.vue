<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="posts-list">
      <post-item
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @remove="$emit('remove', post)"
      >
      </post-item>
    </transition-group>
  </div>
  <h3 
    v-else
    style="color: #800; text-shadow: 0 0 20px #900"
  >
    Список постов пуст
  </h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  emits:['remove'],
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
};
</script>

<style scoped>
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all .7s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.posts-list-move {
  transition: transform 0.8s ease;
}
</style>