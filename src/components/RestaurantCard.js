import { CDN_URL } from "../utils/constants";

const RestrauntsCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
  
  
    return (
      <div className="res-card m-4 rounded-lg overflow-hidden duration-100 hover:scale-95">
        <img
          className="rounded-lg h-44 w-full " 
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId }
        />
        <h3 className="font-bold text-lg pl-2">{name}</h3>
        <div className="flex space-x-4 pl-2">
          <div>
            <h4>{avgRating}</h4>
          </div>
          <div>
            <div>{resData.info.sla.deliveryTime}</div>
          </div>
        </div>
        <h4 className="pl-2">{cuisines.join(", ")}</h4>
      </div>
    );
  };
  
      // Higher order function.
      // Returning a promotion if Restaurant is Veg
  export const ResIsVeg = (RestaurantCard) => {
    
      return (props) => {
        return(
          <div className="duration-100 hover:scale-95">
            <label className="bg-green-300 text-white ml-4 p-2 w-10 rounded-lg absolute z-10"> Veg </label>
            <RestrauntsCard {...props}/>
          </div>
        )
      };
  }

  export default RestrauntsCard;