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
// import Grocery from "./components/Grocery";
{
  /* <h1 id="heading">hello world from react</h1>; */
}

// const header = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );

{
  /* <div id="parent">
  <div id="child1">
    <h1>hello one</h1>
    <h2>hello two</h2>
  </div>
  <div id="child2">
    <h1>hello three</h1>
    <h2>hello four</h2>
  </div>
</div> */
}

// const structure = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "hello one"),
//     React.createElement("h2", {}, "hello two"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "hello one"),
//     React.createElement("h2", {}, "hello two"),
//   ]),
// ]);

// create element using JSX
// const headerReact = <h1 className="header">Namaste React from React</h1>;

// //  functional component with return keywors and {}
// const Title = () => {
//   return <h1 className="header">Namaste React from title component</h1>;
// };

// //  functional component without return keyword and ()
// const HeaderComponent = () => (
//   <>
//     {Title()}
//     <Title />
//     <Title></Title>
//     <h1>this is header component</h1>
//   </>
// );

{
  /*
Applayout
    Header
        logo
        Navlist
    AppBody
        Carousel
        RestaurantContainer
            RestaurentCard
    Footer
*/
}

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
