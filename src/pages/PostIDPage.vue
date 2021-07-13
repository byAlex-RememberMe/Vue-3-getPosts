<template>
  <div>
    <div class="post__item">
      <div>
        PostId <strong>{{ $route.params.id }}</strong>
      </div>
      <div>
        <strong>Название: </strong><q>{{ $route.params }}</q>
      </div>
      <div>
        <strong>Описание: </strong>{{ $route.params.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>