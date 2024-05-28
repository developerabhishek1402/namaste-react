import { useState } from "react";
import RestaurantAccordianData from "./RestaurantAccordianData";

const RestaurantFoodAccordian = ({data, showItems, setShowIndex}) => {
    
    console.log(showItems)

    handleClick = () => {
        
        setShowIndex()
    }

    return (
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{data.title} ({data?.itemCards?.length})</span>
                <span>{!showItems ? "🔽" : "🔼"}</span>
                {/* <span>🔽</span> */}
            </div>

            {showItems && <RestaurantAccordianData data={data?.itemCards} />}

        </div>

        
    )
}

export default RestaurantFoodAccordian;