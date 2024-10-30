import React from "react";
<<<<<<< HEAD
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import HomePage from "./page/home";
>>>>>>> parent of 5b2df8c (upadte cartpage)
import Dashboard from "./components/dashboard";
import ManageCategory from "./pages/admin/manage-category";
import ManageStore from "./pages/admin/manage-store";
import ManageServiceGroup from "./pages/admin/manage-store-group";
import TestPage from "./pages/test";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import TestimonialCarousel from "./components/testimonial-slider";
import PlanAds from "./components/plan-ads";
import PackageCard from "./components/kois-ads";
import KoisAds from "./components/kois-ads";
import BlogList from "./components/blogList";
import Tabbed from "./components/Tabbed-template";
import KoisRecommend from "./components/KoisRecommend";
import Header from "./components/Layout";
import Layout from "antd/es/layout/layout";
import CreateAdsPage from "./pages/Create-ads";
import BlogPage from "./pages/blog";
import ElementResult from "./components/element-result";
import ResultPage from "./pages/ResultPage";
import MiniCart from "./components/mini-cart";
import Cart from "./components/cart";
import MemberManagement from "./components/management/MemberManagement";
import ShopPage from "./page/shopPage";
<<<<<<< HEAD

const ProtectRouteAuth = ({ children }) => {
  const user = useSelector((state) => state.user); // Adjust based on your state structure

  if (!user || user.role !== "ADMIN") {
    toast.error("Permission denied");
    return <Navigate to="/login" />;
  }

  return children;
};

=======
// import Dashboard from "./components/dashboard";
// import MemberManagement from "./components/management/MemberManagement";
>>>>>>> parent of 5b2df8c (upadte cartpage)

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
<<<<<<< HEAD
      path: "test",
      element: <MiniCart />,
=======
      path: "/shopPage",
      element: <ShopPage />,
>>>>>>> parent of 5b2df8c (upadte cartpage)
    },
    {
<<<<<<< HEAD
      path: "test1",
      element: <Cart />,
    },
    {
      path: "test2",
      element: <KoisRecommend />,
    },
    {
      path: "test3",
      element: <PlanAds />,
    },
    {
      path: "test4",
      element: <TestimonialCarousel />,
    },
    {
      path: "dangquangcao",
      element: <CreateAdsPage />,
    },
    {
      path: "blog",
      element: <BlogPage />,
    },
    {
      path: "tracuumenh",
      element: <ResultPage />,
    },
    {
      path: "dashboard",
      element: (
        <ProtectRouteAuth>
          <Dashboard />
        </ProtectRouteAuth>
      ),
      path: "/shopPage",
      element: <ShopPage />,
    },

    {
=======
>>>>>>> parent of 5b2df8c (upadte cartpage)
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "category",
          element: <ManageCategory />,
        },
        {
          path: "store",
          element: <ManageStore />,
        },
        {
          path: "service-group",
          element: <ManageServiceGroup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
