import CustomerContext from "../utils/CustomerContext";
import { useContext } from "react";
const Footer = () => {
  // const { customer } = useContext(CustomerContext);
  return (
    <>
      {/* <p> {customer.name} </p> */}
      <CustomerContext.Consumer>
        {({ customer }) => <p> {customer.name} </p>}
      </CustomerContext.Consumer>
      <h1>Footer</h1>
    </>
  );
};

export default Footer;
