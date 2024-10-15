<template>
  <div class="overlay">
    <form class="form" @submit.prevent="submitForm">
      <div class="d-flex justify-content-between align-items-center">
        <h4>{{ isEdit ? "Chỉnh sửa nhân viên" : "Thêm mới nhân viên" }}</h4>
        <i class="fa-solid fa-xmark" @click="closeModal"></i>
      </div>
      <div>
        <label class="form-label" for="userName">Họ và tên</label>
        <input
          id="userName"
          v-model="formData.name"
          type="text"
          class="form-control"
        />
        <div v-if="errors.name" class="form-text error">{{ errors.name }}</div>
      </div>
      <div>
        <label class="form-label" for="dateOfBirth">Ngày sinh</label>
        <input
          id="dateOfBirth"
          v-model="formData.birthdate"
          type="date"
          class="form-control"
        />
        <div v-if="errors.birthdate" class="form-text error">
          {{ errors.birthdate }}
        </div>
      </div>
      <div>
        <label class="form-label" for="email">Email</label>
        <input
          id="email"
          v-model="formData.email"
          type="text"
          class="form-control"
        />
        <div v-if="errors.email" class="form-text error">
          {{ errors.email }}
        </div>
      </div>
      <div>
        <label class="form-label" for="address">Địa chỉ</label>
        <textarea
          class="form-control"
          v-model="formData.address"
          id="address"
          rows="3"
        ></textarea>
      </div>
      <div>
        <button class="w-100 btn btn-primary">
          {{ isEdit ? "Cập nhật" : "Thêm mới" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const emit = defineEmits();
const store = useStore();

const props = defineProps({
  employee: Object,
  isEdit: Boolean,
});

const formData = reactive({
  name: props.employee?.name || "",
  birthdate: props.employee?.birthdate || "",
  email: props.employee?.email || "",
  address: props.employee?.address || "",
});

const errors = reactive({
  name: null,
  birthdate: null,
  email: null,
});

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const submitForm = async () => {
  Object.keys(errors).forEach((key) => (errors[key] = null));

  if (!formData.name) errors.name = "Họ và tên không được để trống.";
  if (!formData.email) errors.email = "Email không được để trống.";
  else if (!validateEmail(formData.email)) errors.email = "Email không hợp lệ.";
  if (!formData.birthdate) errors.birthdate = "Ngày sinh không được để trống.";

  if (Object.values(errors).some((error) => error)) return;
  const employeeData = {
    id: props.employee?.id,
    ...formData,
  };

  emit("submit", employeeData);
  closeModal();
};

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
