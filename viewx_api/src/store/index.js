import { createStore } from "vuex";
import countModule from "./modules/count.module";
import postModule from "./modules/post.module";
import employeeModule from "./modules/employee.module";

const store = createStore({
  modules: {
    countModule,
    postModule,
    employeeModule,
  },
});

export default store;
