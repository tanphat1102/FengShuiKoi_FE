import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
=======
import StudentManagement from "./StudentManagement.jsx";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> parent of eac4f33 ( fix import error)
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
  </>
);
