<template>
  <div>
    <button class="button" @click="handleCount">Click {{count}} lần</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const handleCount = () => {
  count.value++;
};
</script>

<style scoped>
.button {
  width: 200px;
  height: 50px;
  font-size: 20px;
}
</style>