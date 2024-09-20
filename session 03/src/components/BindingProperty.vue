<template>
  <div>
    <img v-blind:src="url" alt />
    <img :src="url" alt />
    <button v-bind:disabled="isDisabled">click me</button>
    <input v-bind:disabled="isEnter" type="text" />
    <div v-bind="divAttributes">Container</div>
    <!-- Blinding 2 thuoc tinh id :"paragraph",area ="paragraph" -->
    <p v-blind="paragraghAtributes">noi dung</p>

    <!---v-blind cho class và style -->
    <div v-bind:class="{textRed:isTextRed}">Hello word</div>
  </div>
</template>
  
  <script setup>
const url =
  "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg";
const isDisabled = true;
const isEnter = true;
const divAttributes = {
  id: "container",
  class: "container-class"
};
const paragraghAtributes = {
  id: "paragraph",
  area: "paragraph"
};
const isTextRed = true;
</script>
  
  <style scoped>
.textRed {
  color: red;
}
</style>
  