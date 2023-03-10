import RestaurantCard from "./RestaurantCard";
// import { RestaurantList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4707019&lng=70.05773&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restro) =>
      restro?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filterData;
  }
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
