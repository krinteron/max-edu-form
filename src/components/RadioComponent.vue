<template>
  <label class="radio-item" v-for="(option, index) in options" :key="index">
    <input
      type="radio"
      name="group1"
      :checked="option === modelValue"
      @input="$emit('update:modelValue', option)"
    />
    <div class="radio-checkmark"></div>
    <p class="radio-label" v-text="option" />
  </label>
</template>

<script>
export default {
  name: 'RadioComponent',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss" scoped>
.radio-item {
  display: inline-block;
  position: relative;
  padding-left: 34px;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .radio-checkmark:after {
      opacity: 1;
    }
  }

  .radio-checkmark {
    position: absolute;
    left: 0;
    height: 22px;
    width: 22px;
    border: 1px solid black;
    border-radius: 50%;

    &:after {
      content: '';
      position: absolute;
      left: calc(50% - 14px / 2);
      top: calc(50% - 14px / 2);
      width: 14px;
      height: 14px;
      background: black;
      border-radius: 50%;
      opacity: 0;
    }
  }

  .radio-label {
    line-height: 24px;
  }
}
</style>
