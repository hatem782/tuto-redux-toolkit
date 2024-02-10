import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count.reducer";
import postesReducer from "./postes.reducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postes: postesReducer,
  },
});
