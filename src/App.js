import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import RestaurantsContainer from "./components/RestaurantsContainer";
import Login from "./components/Login";
import Error from "./components/Error";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const AboutClass = lazy(() => import("./components/AboutClass"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <RestaurantsContainer /> },
      { path: "/login", element: <Login /> },
      {
        path: "/about",
        element: (
          <Suspense>
            <AboutClass />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
