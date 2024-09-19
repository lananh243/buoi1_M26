<template>
  <div class="box">
    <div class="box-1">
        Box
    </div>
    <div class="box-2">
        Box
    </div>
    <div class="box-3">
        Box
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.box {
    display: flex;
    gap: 40px;
}
.box-1 {
    width: 200px;
    height: 200px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
}

.box-2 {
    width: 200px;
    height: 200px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
}

.box-3 {
    width: 200px;
    height: 200px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
}
</style>