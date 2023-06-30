import { IMG_CDN_URL } from "../../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetMenu from "../utils/useGetMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import store from "../utils/store";

const RestaurantInfo = () => {
  const { id } = useParams();

  const [restaurant, menuData] = useGetMenu(id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Ankush"));
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

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
      <div>
        <button
          onClick={() => handleAddItem()}
          className="p-2 m-5 bg-green-300">
          Add Item
        </button>
      </div>
      <div className="m-2">
        <h1 className="font-bold text-xl px-3 pt-2">Menu</h1>
        <ul>
          {menuData.map((item) => (
            <div key={item?.id}>
              <li className="px-3 "> {item.name} </li>
              <button
                className="bg-green-100 p-2 m-2s"
                onClick={() => addFoodItem(item)}>
                Add Item
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
