import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import ShimmerUI from "./Shimmer";

const Body = () => {

   
    // const arr = useState(resObj) 

    // console.log(arr)

    // //const [resList, setResList] = arr

    // resList = arr[0];
    // console.log(resList)
    // setResList = arr[1]
    // console.log(setResList)

    const [resList, setResList] = useState([])
    const [originalResList, setOriginalResList] = useState([]);
    const [crossIcon, setCrossIcon] = useState(false);
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchData();
    }, [])
    

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setOriginalResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }


    const onSearchText = () => {
      if(searchText){
        const filteredRestaurant = originalResList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setResList(filteredRestaurant)
      }else{
        setResList(originalResList)
      }
      
    }


  return resList.length === 0 ? <ShimmerUI /> : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="search-box" />
          <button className="btn" onClick={() => onSearchText()}>Search</button>
        </div>
        <button className="btn" onClick={() => {
            const filteredRes = resList.filter(res => res.info.avgRating > 4.5);
            setResList(filteredRes);
            setCrossIcon(true);
        }
        }>
          Top Rated Restaurant
        </button>
        {crossIcon && <button className="btn" onClick={() => {
            setCrossIcon(false)
            setResList(originalResList)
        }}>X</button>}
      </div>
      <div className="res-cards-container">
        {
        resList && resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />

          ))}
      </div>
    </div>
  );
};

export default Body;
