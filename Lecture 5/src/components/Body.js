import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../../config";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantList);

  const filterData = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restro) =>
      restro.data.name.includes(searchInput)
    );
    setSearchInput("");
    return filterData;
  };

  // we have used state becoz react doesn't know when this variable will be change for this we have intorduced a hook called useState which watches state every time when component re-render

  // Hook is a normal JS function written by FB developers

  // React used one-way data binding -> means we can't update value of variable manually => we have to create a state variable using useState.

  // useState returns an array which contains a state Variable and a method/function which is utilized to manipulate that state variable
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
          onClick={() => setRestaurants(filterData(searchInput, restaurants))}
        >
          Search
        </button>
        {/* <h1> {searchInput} </h1> */}
      </div>
      <div className="restList">
        {restaurants.map((item, index) => {
          return (
            <RestaurantCard
              key={index}
              name={item.data.name}
              link={item.data.cloudinaryImageId}
              price={item.data.costForTwoString}
              rating={item.data.avgRating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
