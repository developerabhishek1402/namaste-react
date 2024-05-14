import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    if (!resData) {
      return <div>No data available</div>; // Render an appropriate message or component
    }

    const {cloudinaryImageId,name,cuisines, avgRating, costForTwo, sla } = resData?.info
    
  return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="food-img"
          src={CDN_URL + cloudinaryImageId}
        />
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
    </div>
  );
};


export default RestaurantCard;