<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
      v-focus
      type="text"
      placeholder="Название поста"
      v-model="post.title"
    />
    <my-input 
      type="text"
      placeholder="Описание поста"
      v-model="post.body"
      />   
    <my-button 
    class="btn"
    style="align-self:flex-end;margin-top:10px;"
    @click="createPost"
    >
    Создать
    </my-button>
  </form>
</template>

<script>

export default {
  emits:['create'],
  data(){
    return{
      post:{
        title:'',
        body: '',
      }
    }
  },
  methods:{
    createPost(){
      if(this.post.title && this.post.body !== ''){
        const date = Date.now().toString().substr(-6) // сократил милисекунды до 6 цифр
        this.post.id = +date
        this.$emit('create', this.post) 
        this.post = {
          title:'',
          body: '',
        }
      }     
    }
  },
};
</script>

<style scoped>

form{  
  display: flex;
  flex-direction: column;
}


</style>