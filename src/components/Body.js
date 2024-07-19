import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MAIN_RESTAURANT_API } from "../utils/constants";
import useOnlineStausCheck from "../utils/useOnlineStatusCheck";
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

  const onlineStatus = useOnlineStausCheck();
  if(onlineStatus === false) 
    return (
      <h1> Oops looks like you are ofline now. </h1> 
    );  


  return ListofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex h-20 items-center">
        <div className="search m-4 p-4 ">
          <input type="text" className="border border-solid border-black items-center" 
          value={searchText}
          onChange={(e) =>{
            setsearchText(e.target.value);
          }}/>
          <button className="px-4 py-2 bg-amber-100 m-4 rounded-lg items-center" 
          onClick={() =>
            {
            const filteredListRestaurant =  ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestaurant(filteredListRestaurant);
            }
          }>Search</button>
        </div> 
        <div className="search m-4 px-0 flex items-center"> 
        <button
            className="filter-btn px-4 py-2 bg-amber-100 m-4 rounded-lg"
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
      </div>
      <div className="res-container flex flex-wrap overflow-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <RestrauntsCard resData={restaurant} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
