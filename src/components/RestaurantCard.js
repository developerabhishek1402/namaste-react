import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines, avgRating, costForTwo, deliveryTime } = resData?.data
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
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};


export default RestaurantCard;