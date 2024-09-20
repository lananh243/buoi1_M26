<template>
  <div>
    <img v-bind:src="url" alt class="img" />
    <br />
    <br />
    <button @click="handleChange">Change Image</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const url = ref(
  "https://png.pngtree.com/background/20240726/original/pngtree-digitally-rendered-winter-landscape-with-street-light-night-sky-and-snowy-picture-image_9861771.jpg"
);
const handleChange = () => {
  url.value =
    url.value ===
    "https://png.pngtree.com/background/20240726/original/pngtree-digitally-rendered-winter-landscape-with-street-light-night-sky-and-snowy-picture-image_9861771.jpg"
      ? "https://afamilycdn.com/2018/2/4/shibazakura-1517701926391619822241.jpg"
      : "https://png.pngtree.com/background/20240726/original/pngtree-digitally-rendered-winter-landscape-with-street-light-night-sky-and-snowy-picture-image_9861771.jpg";
};
</script>

<style>
.img {
  width: 700px;
  height: 430px;
}
</style>