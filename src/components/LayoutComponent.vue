<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutComponent',
};
</script>

<style scoped>
.container {
  display: inline-block;
  text-align: left;
  padding: 35px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
}
</style>
