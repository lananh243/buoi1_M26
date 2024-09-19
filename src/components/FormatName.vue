<template>
  <div>
    <h3>Họ và tên: {{ fullName }}</h3>
  </div>
</template>

<script setup>
const user = {
  firstName: "Nguyễn Lan",
  lastName: "Anh",
};

const formatName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

const fullName = formatName(user);
</script>

<style>

</style>