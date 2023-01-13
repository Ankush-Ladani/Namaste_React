import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

import { Body2 } from "./src/components/Body2";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Body2 /> */}
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
