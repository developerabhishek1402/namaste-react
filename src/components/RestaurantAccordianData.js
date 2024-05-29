import { MENU_IMG } from "../utils/Constants";
import noImg from "../assets/download.png";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantAccordianData = ({ data }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item))

    }

    return (
        <div>
            {data.map((res) => (
                <div key={res?.card?.info?.id} className="p-2 m-2">
                    <div className="flex justify-between items-start">
                        <div className="text-left mb-2 flex-grow">
                            <p className="font-semibold">{res?.card?.info?.name}</p>
                            <p>₹ {res?.card?.info?.defaultPrice / 100 || res?.card?.info?.price / 100}</p>
                            <p className="text-xs text-left mb-4">{res?.card?.info?.description}</p>
                        </div>
                        <div className="relative">
                            <img
                                className="rounded-xl w-14 h-14"
                                src={res?.card?.info?.imageId ? MENU_IMG + res?.card?.info?.imageId : noImg}
                                alt={res?.card?.info?.name}
                            />
                            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-green-500 rounded p-1 hover:bg-gray-300 hover:text-black" onClick={() => handleAddItem(res)}>Add</button>
                        </div>
                    </div>
                    <hr className="mt-4" />
                </div>
            ))}
        </div>
    );
};

export default RestaurantAccordianData;
