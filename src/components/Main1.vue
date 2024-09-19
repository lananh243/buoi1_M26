<template>
  <div class="main">
    <div class="cart">
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
    </div>
    <div class="cart">
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
    </div>
    <div class="cart">
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
    </div>
    <div class="cart">
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
        <div class="cart-1">Cart</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    width: 850px;
    height: 550px;
    background-color: aquamarine;
}
.cart {
    display: flex;
    gap: 25px;
    padding: 20px;
}
.cart-1 {
    width: 200px;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>