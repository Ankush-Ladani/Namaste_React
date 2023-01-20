import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
// import SignupForm from "./src/components/SignupForm";
import "./style.css";
import BasicForm from "./src/components/BasicForm";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Body2 from "./src/components/Body2";
import RestaurantInfo from "./src/components/RestaurantInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}
      {/* <Body2 /> */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurant/:id",
        element: <RestaurantInfo />,
      },
    ],
  },
  {
    path: "/signup",
    element: <BasicForm />,
  },
]);

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
