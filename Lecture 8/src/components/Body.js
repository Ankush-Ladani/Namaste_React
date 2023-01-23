import RestaurantCard from "./RestaurantCard";
// import { RestaurantList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { GET_RESTAURANTS_URL } from "../../config";
import { filterData } from "../utils/utils";

import { Link } from "react-router-dom";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANTS_URL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // const restaurant = useGetRestaurants();
  // const filteredRestaurants = useGetRestaurants()

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() =>
            setFilteredRestaurants(filterData(searchInput, restaurants))
          }
        >
          Search
        </button>
      </div>
      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restList" style={{ marginTop: "2rem" }}>
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
