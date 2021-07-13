<template>
  <div class="post">
    <div class="post__item">
      <div>
        PostId <strong>{{ post.id }}</strong>
      </div>
      <div>
        <strong>Название: </strong><q>{{ post.title }}</q>
      </div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Открыть
      </my-button>
      <my-button class="post__btns remove" @click="$emit('remove', post)">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["remove"],
  props: ["post"],
};
</script>

<style scoped>
.post {
  display: flex;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 10px;
  margin-top: 15px;
}
.post__item {
  padding-right: 15px;
}
.post__btns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.post__btns.remove {
  border-color: #800;
  color: #800;
}
</style>