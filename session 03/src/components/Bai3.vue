<template>
  <div>
    <input v-bind:disabled="isEnter" type="text" placeholder="Cho phép nhập" />
    <br />
    <br />
    <input v-bind:disabled="isValueInput" type="text" placeholder="Ko cho phép nhập" />
  </div>
</template>

<script setup>
const isEnter = false;
const isValueInput = true;
</script>

<style>
</style>