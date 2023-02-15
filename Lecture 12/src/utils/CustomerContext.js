import { createContext } from "react";

const CustomerContext = createContext({
  customer: {
    name: "Parth Ladani",
    Company: "Reliance",
  },
});

export default CustomerContext;
