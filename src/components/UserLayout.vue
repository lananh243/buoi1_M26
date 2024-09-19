<script setup>
import Header from "./Header.vue"
import Navigation from "./Navigation.vue"
import Menu1 from "./Menu1.vue"
import Main1 from "./Main1.vue"
import Article from "./Article.vue"
</script>
<template>
  <div class="all">
    <Header></Header>
    <Navigation></Navigation>
    <div class="share">
        <Menu1></Menu1>
        <Main1></Main1>
        <Article></Article>
    </div>
  </div>
</template>



<style scoped>
.all {
    background-color: rgb(224, 230, 245);
    width: 100%;
    height: 640px;
}
.share {
    display: flex;
}
</style>