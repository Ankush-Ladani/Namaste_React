import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  costForTwoString,
  locality,
  discountInfo,
}) => {
  //   console.log(props);
  // console.log(discountInfo);
  const { user } = useContext(UserContext);
  return (
    <div className="m-8 w-72 h-[21rem] shadow-xl rounded-xl">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          `${cloudinaryImageId}`
        }
        alt="foodImg"
      />
      <h2 className="font-bold text-xl px-3 pt-2"> {name} </h2>
      <h2 className="px-3 font-semibold"> {costForTwoString} </h2>
      <h2 className="px-3 font-semibold pb-2"> {avgRating} </h2>
      <h2 className="px-3 font-semibold pb-2"> {locality} </h2>
      <h2 className="px-3 font-semibold pb-2"> {discountInfo} </h2>

      <h1> {user.name} </h1>
    </div>
  );
};

export default RestaurantCard;
