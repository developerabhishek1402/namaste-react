
import ShimmerUI from "./Shimmer";
import Card from "./Card";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantFoodAccordian from "./RestaurantFoodAccordian";
import { useState } from "react";

const RestaurantMenuPage = () => {
    const {resId} = useParams()

    const [showIndex, setShowIndex] = useState(0)

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null){
        return (
        <ShimmerUI />
    )
    }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card;

    const acordianData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(acordianData)

    return (
        <div className="text-center py-4">
            <h1 className="text-2xl">{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {acordianData.map((res, index) => (
                <RestaurantFoodAccordian 
                key={res?.card?.card?.title} 
                data={res?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenuPage;