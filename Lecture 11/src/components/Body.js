import RestaurantCard from "./RestaurantCard";
// import { RestaurantList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useOnline } from "../utils/useOnline";
import { GET_RESTAURANTS_URL } from "../../config";
import { filterData } from "../utils/utils";

import { Link } from "react-router-dom";
import TickMark from "../assets/checked.png";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  let online = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANTS_URL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      {/* <div className="search-container">
        {online ? (
          <img className="w-5" src={TickMark} alt="" />
        ) : (
          <i
            style={{ fontSize: "100px", color: "red" }}
            className="far fa-meh"></i>
        )}
      </div> */}
      <div className="mt-5 mx-20  w-full">
        <input
          className="border-2  border-gray-600 rounded-md focus:bg-gray-600 p-2 m-2 focus:text-white focus:placeholder:text-white"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="rounded-3xl bg-green-800 p-2 w-24 mx-2 hover:bg-green-400 hover:text-gray-500  text-white font-bold text-md"
          onClick={() =>
            setFilteredRestaurants(filterData(searchInput, restaurants))
          }>
          Search
        </button>
      </div>
      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className="flex flex-wrap justify-center w-[100%]"
          style={{ marginTop: "2rem" }}>
          {filteredRestaurants.map((item) => {
            return (
              <Link key={item.data.id} to={`/restaurant/${item.data.id}`}>
                <RestaurantCard {...item.data} />
              </Link>
            );
          })}
        </div>
      )}
      {restaurants.length !== 0 && filteredRestaurants.length === 0 && (
        <h1>No Matches Found</h1>
      )}
    </>
  );
};

export default Body;
