<template>
  <button v-on:click="handleClick">Click me</button>
</template>

<script setup>
const handleClick = () => {
  console.log("Clicked");
};
</script>

<style>
</style>