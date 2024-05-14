
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import Card from "./Card";
import { useParams } from "react-router-dom";

const RestaurantMenuPage = () => {


    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()
    

    useEffect(() => {
        fetchMenuData();
    }, [])


    const fetchMenuData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0454031&lng=72.5303036&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);

        const json = await data.json();

        console.log(json)

        setResInfo(json?.data)
    }

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