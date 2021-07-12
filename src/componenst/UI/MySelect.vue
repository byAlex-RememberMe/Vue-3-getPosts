<template>
  <select class="select" v-model="modelValue" @change="changeOption">
    <option 
      disabled 
      value=""
    >
      Выберите из списка
    </option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  emits:['update:modelValue'],
  name:'my-select',
  props:{
    modelValue:{
      type: String
    },
    options:{
      type: Array,
      default: () => []
    }
  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.select{
  border: 2px solid teal;
  border-radius: 8px;
  outline-style: none;
}

</style>