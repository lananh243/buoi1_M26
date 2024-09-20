<template>
  <div>
    <button v-on:click="handleClick">Click me</button>
    <button v-on:click="handleDelete(id)">delete</button>
    <button @click="handleGetEvent">event info</button>
    <form @submit.prevent="handleSubmit">
      <button type="submit">Submit</button>
    </form>
    <button @keydown.esc="handleCloseForm">dong form</button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("Clicked");
};
const handleDelete = id => {
  console.log("Id:", id);
};
const handleGetEvent = event => {
  console.log("Event:", event);
};
const handleSubmit = e => {
  alert("submited");
};
// duoc kich hoat khi ng dung nhan vao nut "dong form"
const handleCloseForm = () => {
  alert("dong form");
};
</script>

<style>
</style>