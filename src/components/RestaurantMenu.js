import { useState } from "react";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [showIndex, setShowindex] = useState();
    const [showItem, setShowItem] = useState(true);
    const resInfo = UseRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;  
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    return ( 
        <div className="menu text-center">
            <h1 className="font-bold my-5 text-xl"> {name} </h1>
            <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p> 
            {/* categories of accodian. */}
            {categories.map((categorie, index) => (
                <RestaurantCategories 
                key={categorie?.card?.card?.title} 
                data = {categorie?.card?.card}
                showItem={index === showIndex ? showItem : false}
                setShowindex= {() => setShowindex(index)}
                setShowItem={() => setShowItem(!showItem)}
                />
            ))}
        </div>
    ); 
};

export default RestaurantMenu;