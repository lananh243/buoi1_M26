<template>
  <div>
    <h3>Thông tin cá nhân</h3>
    <ul>
        <li>Họ và tên : <b>{{user.userName}}</b></li>
        <li>Giới tính : <b>{{user.gender}}</b></li>
        <li>Ngày sinh : <b>{{user.birthday}}</b></li>
        <li>Email : <b>{{user.email}}</b></li>
        <li>Địa chỉ : <b>{{user.address}}</b></li>
    </ul>
  </div>
</template>

<script setup>
const user = {
    userName : "Lan Anh",
    gender : "Nữ",
    birthday: "06/03/2024",
    email: "lananh@gmail.com",
    address: "Thanh Xuân, Hà Nội"
}
</script>

<style>

</style>