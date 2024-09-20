<template>
  <a @click.prevent="check" href="#"></a>
</template>

<script setup>
const check = () => {
  const link = "http://www.google.com";

  if (!link.startsWith("https://")) {
    alert("Đường dẫn không hợp lệ");
  } else {
    window.location.href = link;
  }
};
</script>

<style>
</style>