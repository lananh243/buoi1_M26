<template>
  <div class="card">
    <div class="image">
        <p>Image</p>
    </div>
    <div>
        <div class="title">
          <p>Title</p>  
        </div>
        <div class="btn">
          <button class="button">Add to card</button>  
        </div>
        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    width: 280px;
    height: 280px;
    background-color: whitesmoke;
    border-radius: 20px;
}
.image {
    height: 140px;
    background-color: gray;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}
.title {
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin-top: 26px;
   
}
.btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border-radius: 20px;
}
.button {
    width: 220px; 
    height: 50px;
    background-color: rgb(222, 246, 247);
    font-size: 16px;
}
</style>