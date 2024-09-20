<template>
  <div
    v-bind:class="{active: isActive}"
    v-bind:style="{ color, backgroundColor,width, padding }"
  >Block</div>
</template>

<script setup>
const isActive = true;
const color = "white";
const backgroundColor = "blue";
const width = "300px";
const padding = "20px";
</script>

<style>
</style>