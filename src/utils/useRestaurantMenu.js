import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resData, setResData] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0454031&lng=72.5303036&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);

        const json = await data.json();

        setResData(json.data)

    }

    return resData
}



export default useRestaurantMenu;