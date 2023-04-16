<script>
export default {
  props: {
    modelValue: Boolean
  },
  emits: ['update:modelValue'],
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    },
    handleBackDropClick(e) {
      if (e.target.nodeName === 'DIALOG') {
        this.close();
      }
    }
  },
  watch: {
    modelValue(value) {
      if (value) {
        this.$refs.dialog.showModal();
        return;
      }
      this.$refs.dialog.close();
    }
  }
}
</script>

<template>
  <dialog class="base-modal" ref="dialog" @close="close" @click="handleBackDropClick">
    <slot></slot>
  </dialog>
  <div v-if="false" class="backdrop" @click="close" @cancel="close"></div>
</template>

<style>
.base-modal {
  top: 0;
  right: 0;
  left: auto;
  margin: 0;
  border: none;
  width: 500px;
  height: 100%;
  max-height: 100%;
}
.base-modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 500px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
