import React from 'react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import LoginPage from './page/login';
import RegisterPage from './page/register';
import HomePage from './page/home';
import Dashboard from './components/dashboard';
import ManageCategory from './page/admin/manage-category';

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
            path: "dashboard",
            element: <Dashboard />,
            children:[
              {
                path: "category",
                element: <ManageCategory />,
              },
            ]
          },
      ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App