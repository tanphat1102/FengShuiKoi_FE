import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import Dashboard from "./components/dashboard";
import ManageCategory from "./pages/admin/manage-category";
import ManageStore from "./pages/admin/manage-store";
import ManageServiceGroup from "./pages/admin/manage-store-group";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import TestimonialCarousel from "./components/testimonial-slider";
import PlanAds from "./components/plan-ads";
import KoisRecommend from "./components/KoisRecommend";
import CreateAdsPage from "./pages/Create-ads";
import BlogPage from "./pages/blog";
import ResultPage from "./pages/ResultPage";
import MiniCart from "./components/mini-cart";
import Cart from "./components/cart";
import ShopPage from "./pages/shopPage";

const ProtectRouteAuth = ({ children }) => {
  const user = useSelector((state) => state.user); // Adjust based on your state structure

  if (!user || user.role !== "ADMIN") {
    toast.error("Permission denied");
    return <Navigate to="/login" />;
  }

  return children;
};

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
      path: "test",
      element: <MiniCart />,
    },
    {

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
