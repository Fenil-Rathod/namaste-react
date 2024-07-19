import { CDN_URL } from "../utils/constants";

const RestrauntsCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
  
  
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-lg overflow-auto py-5 bg-gray-100 hover:bg-gray-200">
        <img
          className="res-logo rounded-lg" 
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId }
        />
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime}</h4>
      </div>
    );
  };

  export default RestrauntsCard;