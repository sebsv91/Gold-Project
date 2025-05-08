import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./LoginComponent/Login.jsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./LoginComponent/Registration.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "*", element: <NotFoundPage /> },
  // Store...
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
