<script setup>
import Header from "./Header.vue"
import Menu from "./Menu.vue"
import Main from "./Main.vue"
import Footer from "./Footer.vue"
</script>
<template>
  <div class="all">
    <Header></Header>
    <div class="content">
        <Menu></Menu>
        <div class="change">
          <Main></Main> 
          <Footer></Footer> 
        </div>
        
    </div>
  </div>
</template>



<style scoped>
.all {
    background-color: rgb(224, 230, 245);
    width: 100%;
    height: 600px;
}
.content {
    display: flex;
}
.change {
    margin: auto;
}
</style>