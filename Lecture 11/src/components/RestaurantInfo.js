import { IMG_CDN_URL } from "../../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetMenu from "../utils/useGetMenu";

const RestaurantInfo = () => {
  const { id } = useParams();

  const restaurant = useGetMenu(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-2">
      <div>
        <img
          className="w-96"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <h1 className="font-bold text-xl px-3 pt-2">
          Name :- {restaurant?.name}
        </h1>
        <h2 className="px-3 font-semibold"> {restaurant?.area} </h2>
        <h2 className="px-3 font-semibold"> {restaurant?.city} </h2>
        <h2 className="px-3 font-semibold"> {restaurant?.avgRating} </h2>
        <h2 className="px-3 font-semibold"> {restaurant?.costForTwoMsg} </h2>
      </div>
      <div className="m-2">
        <h1 className="font-bold text-xl px-3 pt-2">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li className="px-3 " key={item?.id}>
              {" "}
              {item.name}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
