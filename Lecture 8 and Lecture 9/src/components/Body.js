import RestaurantCard from "./RestaurantCard";
// import { RestaurantList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { GET_RESTAURANTS_URL } from "../../config";
import { filterData } from "../utils/utils";

import { Link } from "react-router-dom";

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
      <div className="search-container">
        {online ? (
          <i
            className="far fa-laugh-wink"
            style={{ fontSize: "100px", color: "green" }}
          ></i>
        ) : (
          <i
            style={{ fontSize: "100px", color: "red" }}
            className="far fa-meh"
          ></i>
        )}

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
