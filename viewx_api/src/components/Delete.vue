<template>
  <div class="overlay">
    <form class="modal-custom" @submit.prevent="submitModal">
      <div class="modal-title">
        <h4>Cảnh báo</h4>
        <i class="fa-solid fa-xmark" @click="closeForm"></i>
      </div>
      <div class="modal-body-custom">
        <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
      </div>
      <div class="modal-footer-custom">
        <button class="btn btn-light" @click="closeForm">Hủy</button>
        <button class="btn btn-danger" type="submit">Xác nhận</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits();

const closeForm = () => {
  emit("close");
};
const submitModal = () => {
  emit("submit");
};
</script>

<style></style>
