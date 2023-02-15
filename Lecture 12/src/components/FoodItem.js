import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  const dispatch = useDispatch((store) => store.cart.items);

  const clearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="m-8 w-72 h-[21rem] shadow-xl rounded-xl">
      <button className="bg-red-200" onClick={() => clearCart()}>
        Clear Cart
      </button>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          `${cloudinaryImageId}`
        }
        alt="foodImg"
      />
      <h2 className="font-bold text-xl px-3 pt-2"> {description} </h2>
      <h2 className="font-bold text-xl px-3 pt-2"> {name} </h2>
      <h2 className="px-3 font-semibold pb-2"> {price} </h2>
    </div>
  );
};

export default FoodItem;
