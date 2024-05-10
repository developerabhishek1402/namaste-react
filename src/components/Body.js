import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {

   
    // const arr = useState(resObj) 

    // console.log(arr)

    // //const [resList, setResList] = arr

    // resList = arr[0];
    // console.log(resList)
    // setResList = arr[1]
    // console.log(setResList)

    const [resList, setResList] = useState(resObj)
    

  return (
    <div className="body-container">
      <div className="filter">
        <button className="btn" onClick={() => {
            const filteredRes = resList.filter(res => res.data.avgRating > 4);
            setResList(filteredRes)
        }
        }>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-cards-container">
        {resList.map((res) => (
          <RestaurantCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
