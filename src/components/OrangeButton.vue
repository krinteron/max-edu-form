<template>
  <button
    class="submit-btn"
    :disabled="disabled"
    @click.prevent="$emit('click')"
    type="submit"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'OrangeButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: String,
      required: false,
      default: 'отправить',
    },
  },
  emits: ['click'],
};
</script>

<style lang="scss" scoped>
.submit-btn {
  background: #ff9765;
  display: inline-block;
  padding: 10px 15px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 1px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background: gray;
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
