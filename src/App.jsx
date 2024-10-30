import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import Dashboard from "./components/dashboard";
import MemberManagement from "./components/management/MemberManagement";
import ShopPage from "./pages/shop";
import Layout from "./components/Layout";
import CartPage from "./pages/cart";
// import Dashboard from "./components/dashboard";
// import MemberManagement from "./components/management/MemberManagement";
// fix

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/register",
      element: <RegisterPage />,
    },

    {
      path: "/shop",
      element: <ShopPage />,
    },

    {
      path: "/cart",
      element: <CartPage />,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "user",
          element: <MemberManagement />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
