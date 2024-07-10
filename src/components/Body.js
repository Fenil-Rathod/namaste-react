import { useEffect, useState } from "react";
import RestrauntsCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setListofRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [] 
      );
      setfilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [] 
      );
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return ListofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search  ">
          <input type="text" className="search-box" 
          value={searchText}
          onChange={(e) =>{
            setsearchText(e.target.value);
          }}/>
          <button className="search-btn" 
          onClick={() =>
            {
            const filteredListRestaurant =  ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestaurant(filteredListRestaurant);
            }
          }>Search</button>
        </div> 
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestrauntsCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
