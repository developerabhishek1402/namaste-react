
import ShimmerUI from "./Shimmer";
import Card from "./Card";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuPage = () => {
    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null){
        return (
        <ShimmerUI />
    )
    }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card;

    return (resInfo === null) ? <ShimmerUI /> : (
        <div>
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <h2>Menu</h2>
            {itemCards && itemCards.map((res) => {
                    console.log(res.card?.info)
                    return <Card key={res?.card?.info?.id} props={res?.card?.info} />
            })}
        </div>
    )
}

export default RestaurantMenuPage;