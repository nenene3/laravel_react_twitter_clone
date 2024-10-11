import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/AuthComponents/Register/index.js";
import Login from "./components/AuthComponents/Login/index.js";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.jsx";
import { Provider } from "react-redux";
import { store } from "./Store.js";
import React from "react";
import "./index.css";
import Check from "./components/Check.jsx";
import GuestOnlyRoute from "./components/RouteProtection/GuestOnlyRoute";
import Profile from "./components/Profile";
import PrivateRoute from "./components/RouteProtection/PrivateRoute";
import EditProfile from "./components/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div className=" bg-red-700 ">welcome</div>,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          { path: "/profile/:userId", element: <Profile /> },
          { path: "/profile/:userId/edit", element: <EditProfile /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <GuestOnlyRoute />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },

  { path: "/check", element: <Check /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
