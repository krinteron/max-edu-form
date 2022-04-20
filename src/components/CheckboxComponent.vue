<template>
  <label class="checkbox-item">
    <input type="checkbox" @input="checkboxChange" :checked="isOnline" />
    <div class="checkbox-checkmark"></div>
    <p class="checkbox-label" v-text="label" />
  </label>
</template>

<script>
export default {
  name: 'CheckboxComponent',
  props: {
    modelValue: {
      type: String || Number,
      default: null,
    },
    label: {
      type: String,
      default: 'label',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isOnline() {
      return this.modelValue === 'online';
    },
  },
  methods: {
    checkboxChange(event) {
      const value = event.target.checked ? 'online' : null;
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-item {
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  padding-left: 34px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkbox-checkmark:after {
      opacity: 1;
    }
  }

  .checkbox-checkmark {
    position: absolute;
    left: 0;
    height: 22px;
    width: 22px;
    border: 1px solid black;
    border-radius: 3px;

    &:after {
      content: '';
      position: absolute;
      left: 7px;
      top: 2px;
      width: 6px;
      height: 11px;
      border: solid black;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  .checkbox-label {
    line-height: 24px;
  }
}
</style>
