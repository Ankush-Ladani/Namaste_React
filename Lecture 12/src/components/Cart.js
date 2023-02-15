import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import Shimmer from "./Shimmer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length > 0 ? (
    <>
      {cartItems.map((item) => {
        console.log(item);
        return <FoodItem {...item} key={item.id} />;
      })}
      <h1>Welcome to Cart Page</h1>
    </>
  ) : (
    <Shimmer />
  );
};

export default Cart;
