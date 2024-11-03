import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import elementReducer from "./features/elementSlice";

const persistConfig = {
  key: "root",
  storage,
};

// Gộp tất cả reducer vào rootReducer
const rootReducer = combineReducers({
  element: elementReducer,
});

// Áp dụng persistReducer cho rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store với persistedReducer
const store = configureStore({
  reducer: persistedReducer,
});

// Khởi tạo persistor
export const persistor = persistStore(store);

export default store;
