import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
// import SignupForm from "./src/components/SignupForm";
import Profile from "./src/components/Profile";
import "./index.css";
import BasicForm from "./src/components/BasicForm";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Body2 from "./src/components/Body2";
import RestaurantInfo from "./src/components/RestaurantInfo";
// import Instamart from "./src/components/instamart";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
import CustomerContext from "./src/utils/CustomerContext";
import { Provider } from "react-redux";
import store from "./src/utils/store.js";

const Instamart = lazy(() => import("./src/components/instamart"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <CustomerContext.Provider
        value={{
          customer: {
            name: "Ankush Ladani",
          },
        }}>
        <Header />

        <UserContext.Provider
          value={{
            user: {
              name: "Ankush",
              email: "astarladani@gmail.com",
            },
          }}>
          <Outlet />
          {/* <Body /> */}
          {/* <Body2 /> */}
          <Footer />
        </UserContext.Provider>
      </CustomerContext.Provider>
    </Provider>
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
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantInfo />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
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
