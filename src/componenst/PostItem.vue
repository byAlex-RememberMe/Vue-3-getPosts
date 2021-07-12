<template>
  <div class="post">
    <div>
      <div>
        PostId <strong>{{ post.id }}</strong>
      </div>
      <div>
        <strong>Название: </strong><q>{{ post.title }}</q>
      </div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div>
      <my-button 
        class="btn__remove" 
        @click="$emit('remove',post)"
      >
      Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  emits:['remove'],
  props: ["post"],
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  border: 2px solid teal;
  border-radius: 10px;
  margin-top: 15px;
}
.btn__remove {
  border-color: #800;
  color: #800;
  margin: 10px;
}
</style>