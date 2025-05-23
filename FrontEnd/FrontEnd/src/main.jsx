import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import App from "./App.jsx";
import Login from "./LoginComponent/Login.jsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage.jsx";
import Registration from "./LoginComponent/Registration.jsx";
import Store from "./Store/Store.jsx";
import ShoppingCart from "./Items/ShoppingCart.jsx";
import LikedItems from "./Items/LikedItems.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/store",
        element: <Store />,
      },
      { path: "/shoppingCart", element: <ShoppingCart /> },
      { path: "/likedItems", element: <LikedItems /> },
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
