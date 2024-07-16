import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestrauntsCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { MAIN_RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch( MAIN_RESTAURANT_API );
      const json = await response.json();
      setListofRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [] 
      );
      setfilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [] 
      );
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
              (res) => res.info.avgRating > 4.0
            );
              setfilteredRestaurant(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <RestrauntsCard resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
