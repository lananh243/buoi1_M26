import axios from "axios";

const employeeModule = {
  // Khởi tạo các state của Module
  state: {
    loading: false,
    data: [],
    error: null,
  },
  // Chứa các hàm đồng bộ để cập nhật lại state
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    addEmployee(state, payload) {
      state.data.push(payload); // Thêm nhân viên mới vào danh sách
    },
    updateEmployee(state, updatedEmployee) {
      const index = state.data.findIndex(
        (employee) => employee.id === updatedEmployee.id
      );
      if (index !== -1) {
        // Cập nhật đối tượng nhân viên bằng cách thay thế tại vị trí index
        state.data.splice(index, 1, updatedEmployee);
      }
    },
    deleteEmployee(state, employeeId) {
      state.data = state.data.filter((employee) => employee.id !== employeeId);
    },
  },
  // Chứa các hàm bất đồng bộ: gọi API tương tác với dữ liệu
  actions: {
    async useData({ commit }) {
      commit("setLoading", true);
      try {
        // Fetching data directly using axios
        const response = await axios.get("http://localhost:8080/employees");
        commit("setData", response.data); // Cập nhật dữ liệu
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async addNewEmployee({ commit }, employeeData) {
      commit("setLoading", true);
      try {
        const response = await axios.post(
          "http://localhost:8080/employees",
          employeeData
        );
        console.log("Add employee response:", response); // Log phản hồi từ API
        commit("addEmployee", response.data);
      } catch (error) {
        console.error("Error adding employee:", error);
        commit("setError", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async updateEmployee({ commit }, employeeData) {
      try {
        const response = await axios.put(
          `http://localhost:8080/employees/${employeeData.id}`,
          employeeData
        );
        commit("updateEmployee", response.data);
      } catch (error) {
        console.error("Error updating employee:", error);
        commit("setError", error); // Thêm xử lý lỗi
      }
    },

    async deleteEmployee({ commit }, employeeId) {
      try {
        await axios.delete(`http://localhost:8080/employees/${employeeId}`);
        commit("deleteEmployee", employeeId); // Sử dụng mutation đã định nghĩa
      } catch (error) {
        console.error("Error deleting employee:", error);
        commit("setError", error);
      }
    },
  },
  getters: {
    employees: (state) => state.data,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },
};

export default employeeModule;
