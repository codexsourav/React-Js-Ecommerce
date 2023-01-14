import { configureStore } from "@reduxjs/toolkit";
import addresstate from "./services/adressState";
import navbar from "./services/navbar";

export const store = configureStore({
  reducer: { navbar, addresstate },
});
