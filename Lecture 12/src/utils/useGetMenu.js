import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../config";

const useGetMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}=` + id);
    const json = await data?.json();
    setRestaurant(json?.data);
  }

  return restaurant;
};

export default useGetMenu;
