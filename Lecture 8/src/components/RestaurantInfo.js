import { IMG_CDN_URL } from "../../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantInfo = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=22.4707019&lng=70.05773&menuId=${id}`
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restInfo">
      <div>
        <h1>Name :- {restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
        <h2> {restaurant?.area} </h2>
        <h2> {restaurant?.city} </h2>
        <h2> {restaurant?.avgRating} </h2>
        <h2> {restaurant?.costForTwoMsg} </h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}> {item.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
