<template>
  <label>
    <span class="select-wrapper">
      <select
        class="input select-item"
        @input="changeOffice"
        :value="selectValue"
        :disabled="isOnline"
      >
        <option value="null" :label="placeholder" hidden disabled />
        <option v-for="option in options" :key="option.id" :value="option.id">
          {{ option.value }}
        </option>
      </select>
    </span>
  </label>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String || Number,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Choose',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isOnline() {
      return this.modelValue === 'online';
    },
    selectValue() {
      if (this.modelValue === null || this.modelValue === 'online') {
        return 'null';
      }
      return this.modelValue;
    },
  },
  methods: {
    changeOffice(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    right: 12px;
    top: calc(50% - 1.4 * 8px / 2);
    width: 8px;
    height: 8px;
    border: solid dimgray;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    pointer-events: none;
  }

  .select-item {
    padding-right: 30px;
  }
}
</style>
