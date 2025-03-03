import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../features/Crudslice";

const store = configureStore({
  reducer: {
    users: crudReducer,
  },
});

export default store;
