// 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MAIN_RESTAURANT_API } from "../utils/constants";
import useOnlineStausCheck from "../utils/useOnlineStatusCheck";
import RestrauntsCard, { ResIsVeg } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const PromotedRestaurantCard = ResIsVeg(RestrauntsCard);

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
      // console.log(json);
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
      <div className="filter flex h-20 items-center ml-44">
        <div className="search m-4 p-4 ">
          <input type="text" className="border border-transparent border-b-black  items-center px-2 focus:{border border-transparent border-b-black}"
         
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
                (res) => res.info.avgRating > 4.3
              );
                setfilteredRestaurant(filteredList);
            }}
          > 
            Top Rated Restaurants
          </button>

        </div>
      </div>
      <div className="flex flex-row min-h-screen justify-center items-center w-full ml-10"> 
        <div className="w-9/12">
          <div className="res-container grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 w-auto h-auto">
                {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} 
                  to={"/restaurant/"+restaurant.info.id}> 
                  {/* if Restaurant is veg then it will have a Promoted veg Label */}
                  {
                      restaurant.info.veg ? (<PromotedRestaurantCard resData={restaurant} />) : (<RestrauntsCard resData={restaurant} />
                  )}
                </Link>
                ))};
           </div>
        </div>
      </div>
    </div>
  ); 
};

export default Body;
