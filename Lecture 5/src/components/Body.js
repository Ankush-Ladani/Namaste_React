// import RestaurantCard from "./RestaurantCard";
// import { RestaurantList } from "../../config.js";
// import { useState } from "react";

// const filterData = (searchText, restaurants) => {
//   return restaurants.filter((restaurant) =>
//     restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
//   );
// };

// const Body = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [restaurants, setRestaurants] = useState(RestaurantList);
//   const [errMsg, setErrorMsg] = useState("");
//   const searchData = (searchInput, restaurants) => () => {
//     if (searchInput !== "") {
//       const data = filterData(searchInput, restaurants);
//       setRestaurants(data);
//     } else {
//       setErrorMsg("No Match Found");
//       setRestaurants(RestaurantList);
//     }
//   };

//   // const filterData = (searchInput, restaurants) => {
//   //   if (searchInput == "") {
//   //     return setRestaurants(restaurants);
//   //   }
//   //   const filteredData = restaurants.filter((restro) =>
//   //     restro.data.name.includes(searchInput)
//   //   );
//   //   setSearchInput("");
//   //   return filteredData;
//   // };

//   // we have used state becoz react doesn't know when this variable will be change for this we have intorduced a hook called useState which watches state every time when component re-render

//   // Hook is a normal JS function written by FB developers

//   // React used one-way data binding -> means we can't update value of variable manually => we have to create a state variable using useState.

//   // useState returns an array which contains a state Variable and a method/function which is utilized to manipulate that state variable
//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//         <button onClick={searchData(searchInput, restaurants)}>Search</button>
//         <h1> {errMsg} </h1>
//         {/* <h1> {searchInput} </h1> */}
//       </div>
//       <div className="restList">
//         {searchInput ? (
//           <div>
//             {restaurants.map((item, index) => {
//               return (
//                 <RestaurantCard
//                   key={index}
//                   name={item.data.name}
//                   link={item.data.cloudinaryImageId}
//                   price={item.data.costForTwoString}
//                   rating={item.data.avgRating}
//                 />
//               );
//             })}
//           </div>
//         ) : (
//           <div className="restaurant-list">
//             {restaurants.map((restaurant) => {
//               return (
//                 <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Body;

import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../../config";
import { useState, useEffect } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6915853&lng=72.86336349999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

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

  // useState will re-render whole component when any state variable changes.
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
              // key={index}
              // name={item.data.name}
              // link={item.data.cloudinaryImageId}
              // price={item.data.costForTwoString}
              // rating={item.data.avgRating}
              {...item.data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
