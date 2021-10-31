import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
const store = configureStore({
  reducer: {
    itemsReducer: itemsReducer,
  },
});

export default store;
