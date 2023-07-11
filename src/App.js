import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AppBody from "./components/AppBody";
import About from "./components/About.js";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import userContext from "./utills/userContext";
import appStore from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
const Grocery = lazy(() => import("./components/Grocery"));

const ApplayoutComponent = () => {
  const [userDetails, setUserDetails] = useState({
    name: "sohel",
    email: "sohel@gmail.com",
  });

  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{ user: userDetails, setUser: setUserDetails }}
      >
        <HeaderComponent />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplayoutComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AppBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
