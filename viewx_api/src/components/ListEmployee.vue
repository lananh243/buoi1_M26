<template>
  <div>
    <div class="w-[80%] m-auto mt-4 h-[100vh]">
      <main class="main">
        <header class="d-flex justify-content-between mb-3">
          <h3>Nhân viên</h3>
          <button class="btn btn-primary" @click="openModal(false)">
            Thêm mới nhân viên
          </button>
        </header>
        <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
          <input
            style="width: 350px"
            type="text"
            class="form-control"
            placeholder="Tìm kiếm theo email"
          />
          <i class="fa-solid fa-arrows-rotate" title="Refresh"></i>
        </div>
        <!-- Danh sách nhân viên -->
        <table class="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th colspan="2">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in getAllData" :key="employee.id">
              <td>{{ index + 1 }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.birthdate }}</td>
              <td>{{ employee.email }}</td>
              <td>{{ employee.address }}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px">
                  <div class="status status-active"></div>
                  <span> Đang hoạt động</span>
                </div>
              </td>
              <td>
                <span class="button button-block">Chặn</span>
              </td>
              <td>
                <span
                  class="button button-edit"
                  @click="openModal(true, employee)"
                  >Sửa</span
                >
              </td>
              <td>
                <span
                  class="button button-delete"
                  @click="openDeleteModal(employee.id)"
                  >Xóa</span
                >
              </td>
            </tr>
          </tbody>
        </table>
        <footer class="d-flex justify-content-end align-items-center gap-3">
          <select class="form-select">
            <option selected>Hiển thị 10 bản ghi trên trang</option>
            <option>Hiển thị 20 bản ghi trên trang</option>
            <option>Hiển thị 50 bản ghi trên trang</option>
            <option>Hiển thị 100 bản ghi trên trang</option>
          </select>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </footer>
      </main>
    </div>

    <!-- Form thêm mới nhân viên -->
    <AddOrUpdateEmployee
      :employee="selectedEmployee"
      :isEdit="isEdit"
      @submit="handleFormSubmit"
      @close="closeModal"
      v-if="isModalOpen"
    ></AddOrUpdateEmployee>

    <!-- Modal xác nhận chặn tài khoản -->
    <Delete
      @submit="confirmDelete"
      @close="closeDeleteModal"
      v-if="isDeleteModalOpen"
    ></Delete>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import AddOrUpdateEmployee from "./AddOrUpdateEmployee.vue";
import Delete from "./Delete.vue";

const store = useStore();
const isModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const selectedEmployeeId = ref(null);
const selectedEmployee = ref(null);
const isEdit = ref(false);

const openModal = (editMode, employee = null) => {
  isEdit.value = editMode;
  selectedEmployee.value = editMode ? employee : {};
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedEmployee.value = null;
};

const handleFormSubmit = async (formData) => {
  try {
    if (isEdit.value) {
      await store.dispatch("updateEmployee", formData);
    } else {
      await store.dispatch("addEmployee", formData);
    }
    await store.dispatch("useData");
    closeModal();
  } catch (error) {
    console.error("Error:", error);
  }
};

onMounted(() => {
  store.dispatch("useData");
});

const getAllData = computed(() => store.getters.employees);

// Hàm xóa
const openDeleteModal = (employeeId) => {
  selectedEmployeeId.value = employeeId;
  isDeleteModalOpen.value = true;
};

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false;
  selectedEmployeeId.value = null;
};

const confirmDelete = async () => {
  if (selectedEmployeeId.value) {
    await store.dispatch("deleteEmployee", selectedEmployeeId.value);
    closeDeleteModal();
    await store.dispatch("useData");
  }
};
</script>

<style></style>
