<template>
  <div>
    <div class="box" v-bind:style="{ backgroundColor: color }"></div>
    <br />
    <button @click="handleChange">Change Background</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref("blue");

const handleChange = () => {
  color.value = color.value === "blue" ? "red" : "blue";
};
</script>

<style>
.box {
  width: 350px;
  height: 150px;
}
</style>