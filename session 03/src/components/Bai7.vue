<template>
  <div>
    <h3>Form</h3>
    <form @submit.prevent="handleSubmit">
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
const handleSubmit = e => {
  console.log("Form submission prevented!");
};
</script>

<style>
</style>