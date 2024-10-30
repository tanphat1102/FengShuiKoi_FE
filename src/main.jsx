import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
<<<<<<< HEAD
import "./index.css";
import StudentManagement from "./StudentManagement.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store.js";
import { persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <>
    <ConfigProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </ConfigProvider>
=======

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
>>>>>>> parent of 5b2df8c (upadte cartpage)
  </>
);
