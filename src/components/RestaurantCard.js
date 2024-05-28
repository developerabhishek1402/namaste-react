import { useContext } from "react";
import { CDN_URL } from "../utils/Constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;

    const loggedInUserData = useContext(UserContext)

    console.log(loggedInUserData)

    if (!resData) {
      return <div>No data available</div>; // Render an appropriate message or component
    }

    const {cloudinaryImageId,name,cuisines, avgRating, costForTwo, sla } = resData?.info
    
  return (
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:border border-solid-1">
        <img
          className="rounded-lg w-full h-full object-cover"
          alt="food-img"
          src={CDN_URL + cloudinaryImageId}
        />
        <h4 className="font-bold py-4 text-lg">{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>{loggedInUserData.loggedInUser}</h4>
    </div>
  );
};


export const VegRestaurantCard = () => {
  return (props) => {
    return (
      <>
      <label className="absolute bg-green-500 rounded-lg m-3">Top Rated</label>
      <RestaurantCard {...props} />
      </>
    )
  }
}


export default RestaurantCard;