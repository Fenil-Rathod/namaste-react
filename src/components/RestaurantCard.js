import { CDN_URL } from "../utils/constants";
import resObj from "../utils/mockdata";

const RestrauntsCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
  
  
    return (
      <div className="res-card">
        <img
          className="res-logo" 
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.deliveryTime}</h4>
      </div>
    );
  };

  export default RestrauntsCard;