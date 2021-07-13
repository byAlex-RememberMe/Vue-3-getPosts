<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'my-button'
}
</script>

<style>
.btn{
  padding: 5px 10px;
  border: 2px solid teal;
  border-radius: 8px;
  background: none;
  color: teal;
}
.btn:hover{
  transform: translateY(1px)
}

</style>