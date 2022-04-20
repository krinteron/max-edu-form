<template>
  <fieldset class="form-item">
    <p class="title" :class="{ required }" v-text="label" />
    <slot />
  </fieldset>
</template>
<script>
export default {
  name: 'FormField',
  props: {
    label: {
      type: String,
      required: false,
      default: 'Lable',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

.form-item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  .title {
    font-size: 16px;

    &.required {
      &::after {
        content: ' *';
        color: red;
      }
    }
  }
}
</style>
