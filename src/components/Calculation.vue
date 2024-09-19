<template>
  <div>
    <h3>Danh sách kết quả</h3>
    <ul>
        <li>10 + 10 = {{ add(10, 10) }}</li>
        <li>10 - 10 = {{sub(10,10)}}</li>
        <li>10 * 10 = {{mul(10,10)}}</li>
        <li>10 / 10 = {{div(10,10)}}</li>
    </ul>
  </div>
</template>

<script setup > 
const add = (a, b) => a + b;
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b
</script>

<style>

</style>