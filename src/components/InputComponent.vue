<template>
  <input
    class="input"
    v-model="chooseValue"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'InputComponent',
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
    placeholder: {
      type: String,
      required: false,
      default: 'Введите текст',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    chooseValue: {
      get() {
        if (this.options.includes(this.modelValue)) {
          return '';
        }
        return this.modelValue;
      },
      set(value) {
        return this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
