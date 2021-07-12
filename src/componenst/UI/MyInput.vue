<template>
  <input 
    class="input" 
    type="text"
    :value="modelValue"
    @input="updateInput"
  >
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue:[String,Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
input{
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid teal;
  border-radius: 10px;
  outline-style: none;
}

</style>