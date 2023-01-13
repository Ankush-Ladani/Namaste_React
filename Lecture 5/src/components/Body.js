import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../../config";

const Body = () => {
  return (
    <div className="restList">
      {RestaurantList.map((item) => {
        return (
          <RestaurantCard
            name={item.data.name}
            link={item.data.cloudinaryImageId}
            price={item.data.costForTwoString}
            rating={item.data.avgRating}
          />
        );
      })}
    </div>
  );
};

export default Body;
